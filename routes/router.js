//package dependencies
const dotenv = require('dotenv').config();
const express=require("express");
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')();
const querystring = require('querystring');
const request = require('request-promise');
//config vars
const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;

const scopes = 'read_products,write_products';
const forwardingAddress = process.env.DYNO ? "https://societe-portsmouth.herokuapp.com" : "https://localhost"
const router = express.Router();
//begin route listing
router.get('/', (req, res) => {
	if (res.app.get('token')){
   		res.sendFile(__dirname+"/demolinks.html");
   	}
   	else{
   		res.redirect("/shopify?shop=societe-portsmouth.myshopify.com")
   	}
});

router.get('/shopify', (req, res) => {
  const shop = req.query.shop;
  if (shop) {
    const state = nonce();
    const redirectUri = forwardingAddress + '/shopify/callback';
    const installUrl = 'https://' + shop +
      '/admin/oauth/authorize?client_id=' + apiKey +
      '&scope=' + scopes +
      '&state=' + state +
      '&redirect_uri=' + encodeURIComponent(redirectUri);

    res.cookie('state', state);
    res.redirect(installUrl);
  } else {
    return res.status(400).send('Missing shop parameter. Please add ?shop=your-development-shop.myshopify.com to your request');
  }
});

router.get('/shopify/callback', (req, res) => {
  const { shop, hmac, code, state } = req.query;
  const stateCookie = cookie.parse(req.headers.cookie).state;

  if (state !== stateCookie) {
    return res.status(403).send('Request origin cannot be verified');
  }

  if (shop && hmac && code) {
    // DONE: Validate request is from Shopify
    const map = Object.assign({}, req.query);
    delete map['signature'];
    delete map['hmac'];
    const message = querystring.stringify(map);
    const generatedHash = crypto
      .createHmac('sha256', apiSecret)
      .update(message)
      .digest('hex');

    if (generatedHash !== hmac) {
      return res.status(400).send('HMAC validation failed');
    }

    // DONE: Exchange temporary code for a permanent access token
    const accessTokenRequestUrl = 'https://' + shop + '/admin/oauth/access_token';
    const accessTokenPayload = {
      client_id: apiKey,
      client_secret: apiSecret,
      code,
    };
    console.log(accessTokenPayload)

    request.post(accessTokenRequestUrl, { json: accessTokenPayload })
    .then((accessTokenResponse) => {
      const accessToken = accessTokenResponse.access_token;
      // DONE: Use access token to make API call to 'shop' endpoint
      const shopRequestUrl = 'https://' + shop + '/admin/shop.json';
      const shopRequestHeaders = {
        'X-Shopify-Access-Token': accessToken,
      };
      console.log(accessToken)
      request.get(shopRequestUrl, { headers: shopRequestHeaders })
      .then((shopResponse) => {
      	res.app.set('token', accessToken);
        res.redirect("/");
      })
      .catch((error) => {
        res.status(error.statusCode).send(error.error.error_description);
      });
    })
    .catch((error) => {
      res.status(error.statusCode).send(error.error.error_description);
    });

  } else {
    res.status(400).send('Required parameters missing');
  }
});
module.exports=router;