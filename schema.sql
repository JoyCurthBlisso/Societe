DROP DATABASE IF EXISTS Societe_db;

CREATE DATABASE Societe_db;

USE Societe_db;

CREATE TABLE t_RetailInv
(
	product_id INTEGER(100) NOT NULL AUTO_INCREMENT,
	materialId INTEGER(100), 
	commonName VARCHAR(255),
	description TEXT,
	retailPrice DECIMAL(7,2),
	qtyOnHand DECIMAL(7,2),
	reorderPoint INTEGER(11),
	locationId INTEGER(11),
	channelId INTEGER(11),
	PRIMARY KEY (product_id)
);

CREATE TABLE t_Material
(
	id INTEGER(100) NOT NULL AUTO_INCREMENT,
	commonName VARCHAR(255) NOT NULL,
	latinName VARCHAR(255),
	description TEXT,
	cost DECIMAL(7,2),
	unit VARCHAR(255),
	reorderPoint INTEGER(11),
	lot VARCHAR(255),
	purchaseDate DATE,
	packedDate DATE,
	supplierId INTEGER(11),
	sourcing VARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE t_RawComponents
(
	id INTEGER(100) NOT NULL AUTO_INCREMENT,
	materialId INTEGER(100),
	commonName VARCHAR(255) NOT NULL,
	latinName VARCHAR(255),
	description VARCHAR(255),
	qtyOnHand DECIMAL(7,2),
	reorderPoint INTEGER(11),
	supplierId INTEGER(11),
	locationId INTEGER(11),
	PRIMARY KEY (id)
);

CREATE TABLE t_Suppliers
(
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	contact VARCHAR(255),
	address1 VARCHAR(255),
	address2 VARCHAR(255),
	city VARCHAR(255),
	state VARCHAR(2),
	postCode VARCHAR(24),
	country VARCHAR(100),
	phone1 VARCHAR(10),
	phone2 VARCHAR(10),
	fax VARCHAR(255),
	email1 VARCHAR(255),
	email2 VARCHAR(255),
	url TEXT,
	notes LONGTEXT,
	PRIMARY KEY (id)
);


CREATE TABLE t_UoM
(
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
	measure VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE t_Location
(
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
	location VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE t_Sourcing
(
	id INTEGER(11) NOT NULL	AUTO_INCREMENT,
	sourcing TEXT,
	PRIMARY KEY (id)
);

CREATE TABLE t_Channel
(
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
	channel VARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE Orders
(
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
	purchase_order_item VARCHAR(40),
	vendorName VARCHAR(65),
	order_date DATE,
	shipping_amt DECIMAL(8,2),
	total_amt DECIMAL(8,2),
	PRIMARY KEY (id)
);

CREATE TABLE Order_items
(
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
	item_sku VARCHAR(65),
	item_description VARCHAR(100),
	organic VARCHAR(40),
	item_cost DECIMAL(8,2),
	item_uom VARCHAR(25),
	item_qty INTEGER(11),
	item_discount_amt DECIMAL(8,2),
	item_price DECIMAL(8,2),
	received_date DATE,
	PRIMARY KEY (id)
);

CREATE TABLE Customers
(
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(65),
	last_name VARCHAR(65),
	email VARCHAR(100),
	dob DATE,
	loyalty BOOLEAN,
	mailing_list BOOLEAN,
	city VARCHAR(65),
	state VARCHAR(2),
	phone VARCHAR(15),
	workshop_ind BOOLEAN,
	subscription_type VARCHAR(65),
	subscribe_start_date DATE,
	patient_first_visit_date DATE,
	PRIMARY KEY (id)
);