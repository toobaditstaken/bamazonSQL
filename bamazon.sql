CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE Products(
	ItemID INTEGER(10) AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(50) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(10) NOT NULL,
    StockQuantity INTEGER(10),
    primary key (ItemId)
);

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Titanfall 2','Game',8.99,200);

ALTER TABLE Products DROP COLUMN Price;
ALTER TABLE Products ADD COLUMN Price DECIMAL(10,2) NOT NULL;

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Dead Space ULT','Game',5000,10);
INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Mountain Dew','Drink',1.98,300);
INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Doritos Cool Ranch','Food',1.78,300);
INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Broccoli','Food',2.26,200);
