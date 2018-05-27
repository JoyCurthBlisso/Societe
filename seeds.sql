INSERT INTO t_Material (commonName, cost, lot, purchaseDate) VALUES
('common name', 'latin name', 'description', 15.00, 'Ounce', 14, 'lot1234', '2018-05-05', '2018-05-01',1,'Organic'),
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
('N/A');

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

