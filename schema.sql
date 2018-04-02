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