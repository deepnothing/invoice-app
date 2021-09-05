CREATE TABLE invoices(
   id                     VARCHAR(6) NOT NULL PRIMARY KEY
  ,createdAt              DATE  NOT NULL
  ,paymentDue             DATE  NOT NULL
  ,description            VARCHAR(19) NOT NULL
  ,paymentTerms           INTEGER  NOT NULL
  ,clientName             VARCHAR(16) NOT NULL
  ,clientEmail            VARCHAR(26)
  ,status                 VARCHAR(7) NOT NULL
  ,senderAddressstreet    VARCHAR(16) NOT NULL
  ,senderAddresscity      VARCHAR(6) NOT NULL
  ,senderAddresspostCode  VARCHAR(6) NOT NULL
  ,senderAddresscountry   VARCHAR(14) NOT NULL
  ,clientAddressstreet    VARCHAR(18)
  ,clientAddresscity      VARCHAR(11)
  ,clientAddresspostCode  VARCHAR(8)
  ,clientAddresscountry   VARCHAR(24)
  ,items0name             VARCHAR(16) NOT NULL
  ,items0quantity         INTEGER
  ,items0price            NUMERIC(8,2) NOT NULL
  ,items0total            NUMERIC(8,2) NOT NULL
  ,total                  NUMERIC(8,2) NOT NULL
  ,items1name             VARCHAR(16)
  ,items1quantity         INTEGER 
  ,items1price            INTEGER 
  ,items1total            INTEGER 
);
INSERT INTO invoices(id,createdAt,paymentDue,description,paymentTerms,clientName,clientEmail,status,senderAddressstreet,senderAddresscity,senderAddresspostCode,senderAddresscountry,clientAddressstreet,clientAddresscity,clientAddresspostCode,clientAddresscountry,items0name,items0quantity,items0price,items0total,total,items1name,items1quantity,items1price,items1total) VALUES ('RT3080','2021-08-18','2021-08-19','Re-branding',1,'Jensen Huang','jensenh@mail.com','paid','19 Union Terrace','London','E1 3EZ','United Kingdom','106 Kendell Street','Sharrington','NR24 5WQ','United Kingdom','Brand Guidelines',1,1800.9,1800.9,1800.9,NULL,NULL,NULL,NULL);
INSERT INTO invoices(id,createdAt,paymentDue,description,paymentTerms,clientName,clientEmail,status,senderAddressstreet,senderAddresscity,senderAddresspostCode,senderAddresscountry,clientAddressstreet,clientAddresscity,clientAddresspostCode,clientAddresscountry,items0name,items0quantity,items0price,items0total,total,items1name,items1quantity,items1price,items1total) VALUES ('XM9141','2021-08-21','2021-09-20','Graphic Design',30,'Alex Grim','alexgrim@mail.com','pending','19 Union Terrace','London','E1 3EZ','United Kingdom','84 Church Way','Bradford','BD1 9PB','United Kingdom','Banner Design',1,156,156,556,'Email Design',2,200,400);
INSERT INTO invoices(id,createdAt,paymentDue,description,paymentTerms,clientName,clientEmail,status,senderAddressstreet,senderAddresscity,senderAddresspostCode,senderAddresscountry,clientAddressstreet,clientAddresscity,clientAddresspostCode,clientAddresscountry,items0name,items0quantity,items0price,items0total,total,items1name,items1quantity,items1price,items1total) VALUES ('RG0314','2021-09-24','2021-10-01','Website Redesign',7,'John Morrison','jm@myco.com','paid','19 Union Terrace','London','E1 3EZ','United Kingdom','79 Dover Road','Westhall','IP19 3PF','United Kingdom','Website Redesign',1,14002.33,14002.33,14002.33,NULL,NULL,NULL,NULL);
INSERT INTO invoices(id,createdAt,paymentDue,description,paymentTerms,clientName,clientEmail,status,senderAddressstreet,senderAddresscity,senderAddresspostCode,senderAddresscountry,clientAddressstreet,clientAddresscity,clientAddresspostCode,clientAddresscountry,items0name,items0quantity,items0price,items0total,total,items1name,items1quantity,items1price,items1total) VALUES ('RT2080','2021-10-11','2021-10-12','Logo Concept',1,'Alysa Werner','alysa@email.co.uk','pending','19 Union Terrace','London','E1 3EZ','United Kingdom','63 Warwick Road','Carlisle','CA20 2TG','United Kingdom','Logo Sketches',1,102.04,102.04,102.04,NULL,NULL,NULL,NULL);
INSERT INTO invoices(id,createdAt,paymentDue,description,paymentTerms,clientName,clientEmail,status,senderAddressstreet,senderAddresscity,senderAddresspostCode,senderAddresscountry,clientAddressstreet,clientAddresscity,clientAddresspostCode,clientAddresscountry,items0name,items0quantity,items0price,items0total,total,items1name,items1quantity,items1price,items1total) VALUES ('AA1449','2021-10-7','2021-10-14','Re-branding',7,'Mellisa Clarke','mellisa.clarke@example.com','pending','19 Union Terrace','London','E1 3EZ','United Kingdom','46 Abbey Row','Cambridge','CB5 6EG','United Kingdom','New Logo',1,1532.33,1532.33,4032.33,'Brand Guidelines',1,2500,2500);
INSERT INTO invoices(id,createdAt,paymentDue,description,paymentTerms,clientName,clientEmail,status,senderAddressstreet,senderAddresscity,senderAddresspostCode,senderAddresscountry,clientAddressstreet,clientAddresscity,clientAddresspostCode,clientAddresscountry,items0name,items0quantity,items0price,items0total,total,items1name,items1quantity,items1price,items1total) VALUES ('TY9141','2021-10-01','2021-10-31','Landing Page Design',30,'Thomas Wayne','thomas@dc.com','pending','19 Union Terrace','London','E1 3EZ','United Kingdom','3964  Queens Lane','Gotham','60457','United States of America','Web Design',1,6155.91,6155.91,6155.91,NULL,NULL,NULL,NULL);
INSERT INTO invoices(id,createdAt,paymentDue,description,paymentTerms,clientName,clientEmail,status,senderAddressstreet,senderAddresscity,senderAddresspostCode,senderAddresscountry,clientAddressstreet,clientAddresscity,clientAddresspostCode,clientAddresscountry,items0name,items0quantity,items0price,items0total,total,items1name,items1quantity,items1price,items1total) VALUES ('FV2353','2021-11-05','2021-11-12','Logo Re-design',7,'Anita Wainwright',NULL,'draft','19 Union Terrace','London','E1 3EZ','United Kingdom',NULL,NULL,NULL,NULL,'Logo Re-design',1,3102.04,3102.04,3102.04,NULL,NULL,NULL,NULL);
