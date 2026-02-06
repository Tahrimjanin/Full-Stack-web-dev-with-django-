-- Active: 1769617333358@@127.0.0.1@3306
-- Database Data Create 
-- Insert One & Insert Multiple Records
INSERT INTO users (firstname,lastname,email,mobile,password,otp)
VALUES
('John','Doe','john.doe1@example.com','1234567891','password123','123456'),
('John','Doe','john.doe2@example.com','1234567892','password123','123456'),
('John','Doe','john.doe3@example.com','1234567893','password123','123456'),
('John','Doe','john.doe4@example.com','1234567894','password123','123456');

-- Delete One & Delete Multiple Records
DELETE FROM users WHERE id=4;
DELETE FROM users WHERE id IN(5,6);


-- Update One & Update Multiple Records
UPDATE users SET firstname="Rabbil", lastname="Hasan" WHERE id=7;
UPDATE users SET firstname="Intractive", lastname="Cares" WHERE id IN(7,8);

-- best practice without *
-- Select One & Select Multiple Records
SELECT * FROM users;
SELECT * FROM users WHERE id=7;
SELECT * FROM users WHERE id IN(7,8);
SELECT firstname,password,otp FROM users WHERE id IN(7,8);

INSERT INTO categories (name,user_id)
VALUES
('Electronics',7),
('Books',8),
('Clothing',7),
('Home & Kitchen',8);

INSERT INTO products (user_id,category_id,name,price,unit,img_url)
VALUES
(7,2,'Smartphone','699.99','piece','http://example.com/smartphone.jpg'),
(7,2,'Novel Book','19.99','piece','http://example.com/novel.jpg'),
(7,2,'T-Shirt','15.99','piece','http://example.com/tshirt.jpg'),
(7,2,'Blender','49.99','piece','http://example.com/blender.jpg'),
(8,2,'Laptop','999.99','piece','http://example.com/laptop.jpg'),
(8,2,'Science Book','29.99','piece','http://example.com/sciencebook.jpg'),
(8,2,'Jeans','39.99','piece','http://example.com/jeans.jpg'),
(8,2,'Microwave','89.99','piece','http://example.com/microwave.jpg');

-- Very Few Variations in INSERT, DELETE, UPDATE Queries
-- More Variations in SELECT Queries

SELECT * from products;
SELECT * from products WHERE id=21;
SELECT * from products WHERE id IN(21,22,23);
SELECT name,price FROM products;
SELECT name, price FROM products WHERE id>=26 AND id<=28;
SELECT name, price FROM products WHERE id>=26 OR id<=28;

SELECT name, price FROM products WHERE price>=50.00 AND price<=800.00;
SELECT name, price FROM products WHERE price>=50.00 OR price<=20.00;
SELECT name, price FROM products WHERE name LIKE '%Book%';
SELECT name, price FROM products WHERE name LIKE 'S%';
SELECT name, price FROM products WHERE name LIKE '%e';

SELECT 
SUM(price) as total_price,
COUNT(id) as total_products,
AVG(price) as average_price,
MIN(price) as minimum_price,
MAX(price) as maximum_price
FROM products;


-- INNER JOIN between products and categories Using Query Alias



SELECT p.id,p.category_id, p.name, c.name FROM products AS p
INNER JOIN categories AS c ON p.category_id = c.id;


SELECT products.id,products.category_id,products.name, categories.name,categories.user_id 
FROM products INNER JOIN categories ON products.category_id =categories.id;

SELECT products.id,products.category_id,products.name, categories.name,categories.user_id 
FROM products LEFT JOIN categories ON products.category_id =categories.id;

SELECT products.id,products.category_id,products.name, categories.name,categories.user_id 
FROM products RIGHT JOIN categories ON products.category_id =categories.id;


SELECT p.id as product_id,p.category_id, p.name as product_name, c.name as category_name FROM products AS p
INNER JOIN categories AS c ON p.category_id = c.id;


-- PRODUCT--> CATEGORY---> USERS
-- (PRODUCT--> CATEGORY) (CATEGORY---> USERS)

SELECT products.id,products.category_id,products.name, categories.name,categories.user_id 
FROM products CROSS JOIN categories 


-- Statements 1
-- Statements 2
-- Statements 3
-- Statements 4
-- Statements Final Output 
