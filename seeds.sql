INSERT INTO t_Material (commonName, cost, lot, purchaseDate) VALUES
('common name', 'latin name', 'description', 15.00, 'oz', 14, 'lot1234', '2018-05-05', '2018-05-01',1,'Organic'),
('Acacia Powder', '12.5', '23426', '2017-11-16'),
('Activated Charcoal', '30.4', '73395', '2017-11-16'),
('Activated Charcoal', '30.4', '73647', '2017-11-16'),
('Alfalfa Leaf', '11', '23497', '2017-11-16'),
('Anise Star Pods, Whole', '15', '23563', '2017-11-16'),
('Anise Star', '22.08', '54987', '2017-11-16'),
('Arrow Root Powder', '40', 'B8856', '2017-11-16');

INSERT INTO t_Location (location) VALUES
('Jar'),
('Basement'),
('Cabinet'),
('Teabox');

INSERT INTO t_Sourcing (sourcing) VALUES
('Organic'),
('Wild Harvested'),
('Unknown');

INSERT INTO t_Channel (channel) VALUES
('Amazon'),
('Bliss'),
('Joy Curth web'),
('2Joes');

INSERT INTO t_UoM (measure) VALUES
('lb'),
('oz'),
('ml');

INSERT INTO t_Suppliers (name, contact, address1, address2, city, state, postCode, country, phone1, phone2, email1, email2, url) VALUES
('Bluechai', 'Stefan Dorn', '', '', 'Horgenzell', '', '88263', 'Germany', '', '', 'hi@bluechai.com', '', 'http://bluechai.com'),
('Mountain Rose Herbs', '', 'PO Box 50220', '', 'Eugene', 'OR', '97405', 'USA', '8008793337', '5417417307', 'support@mountainroseherbs.com', '', 'http://mountainroseherbs.com');

INSERT INTO Orders (purchase_order_item, vendorName, order_date, shipping_amt, total_amount) VALUES
('0001','Mountain Rose Herbs','2018-05-31',7,25),
('0002','Bluechai','2018-05-27',5.00,40.00);

INSERT INTO Order_items (id, item_sku, item_description, organic, item_cost, item_uom, item_qty, item_discount_amt, item_price, received_date) VALUES
(1,'121212','item description','Wild-harvest',12.00,'Ounce',2,1,11.00,'2018-05-31'),
(2,'313131','item description','Organic',10.00,'Ounce',2,2.00,8.00,'2018-05-31'),
(3,'98987','item description','Unknown',20.00,'Ounce',2,5.00,15.00,'2018-05-31'),
(4,'546654','item description','Wild-harvest',10.00,'Ounce',3,0,10.00,'2018-05-31');

INSERT INTO Customers (first_name, last_name, email, dob, loyalty, mailing_list, city, state, phone, workshop_ind, subscription_type, sbuscribe_start_date, patient_first_visit_date) VALUES
('Keira','Nevers', 'keira.nevers@gmail.com','1969-05-08','0','0','East Wakefield','6039037351','NH','0','none','2018-05-31','2018-05-31');

