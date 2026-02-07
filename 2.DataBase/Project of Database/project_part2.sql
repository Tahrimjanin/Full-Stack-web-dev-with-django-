-- USERS
INSERT INTO users (id, firstname, lastname, email, mobile, password, otp)
VALUES
(1, 'Alic', 'Smith', 'alic.smith@example.com', '1111111111', 'password123', '111111'),
(2, 'Bob', 'Johnson', 'bob.johnson@example.com', '2222222222', 'password123', '222222'),
(3, 'Charlie', 'Brown', 'charlie.brown@example.com', '3333333333', 'password123', '333333'),
(4, 'Diana', 'Miller', 'diana.miller@example.com', '4444444444', 'password123', '444444'),
(5, 'Ethan', 'Davis', 'ethan.davis@example.com', '5555555555', 'password123', '555555'),
(6, 'Fiona', 'Wilson', 'fiona.wilson@example.com', '6666666666', 'password123', '666666');

-- DELETE SOME USERS (optional)
DELETE FROM users WHERE id=4;
DELETE FROM users WHERE id IN(5,6);

-- UPDATE USERS (example)
UPDATE users
SET 
    firstname = CASE 
        WHEN id=1 THEN 'AliceUpdated'
        WHEN id=2 THEN 'BobUpdated'
    END,
    lastname = CASE
        WHEN id=1 THEN 'SmithUpdated'
        WHEN id=2 THEN 'JohnsonUpdated'
    END
WHERE id IN (1,2);

-- SELECT USERS
SELECT id, firstname, lastname, email, mobile FROM users;
SELECT firstname, password, otp FROM users WHERE id IN(1,2);

-- CATEGORIES
INSERT INTO categories (id, name, user_id)
VALUES
(1, 'Electronics', 1),
(2, 'Books', 1),
(3, 'Clothing', 2),
(4, 'Home & Kitchen', 2);

-- PRODUCTS
INSERT INTO products (user_id, category_id, name, price, unit, img_url)
VALUES
(1, 1, 'Smartphone', 699.99, 'piece', 'http://example.com/smartphone.jpg'),
(1, 2, 'Novel Book', 19.99, 'piece', 'http://example.com/novel.jpg'),
(1, 2, 'Notebook', 15.99, 'piece', 'http://example.com/notebook.jpg'),
(2, 3, 'Jeans', 39.99, 'piece', 'http://example.com/jeans.jpg'),
(2, 4, 'Blender', 49.99, 'piece', 'http://example.com/blender.jpg'),
(2, 1, 'Laptop', 999.99, 'piece', 'http://example.com/laptop.jpg'),
(2, 2, 'Science Book', 29.99, 'piece', 'http://example.com/sciencebook.jpg'),
(2, 4, 'Microwave', 89.99, 'piece', 'http://example.com/microwave.jpg');

-- SELECT PRODUCTS
SELECT id, name, price FROM products;
SELECT id, name, price FROM products WHERE id IN (1,2,3);
SELECT name, price FROM products WHERE price >= 50.00 AND price <= 800.00;
SELECT name, price FROM products WHERE price >= 50.00 OR price <= 20.00;
SELECT name, price FROM products WHERE name LIKE '%Book%';
SELECT name, price FROM products WHERE name LIKE 'S%';
SELECT name, price FROM products WHERE name LIKE '%e';

-- AGGREGATE FUNCTIONS
SELECT 
    SUM(price) AS total_price,
    COUNT(id) AS total_products,
    AVG(price) AS average_price,
    MIN(price) AS minimum_price,
    MAX(price) AS maximum_price
FROM products;

-- JOINS
SELECT p.id AS product_id, p.category_id, p.name AS product_name, c.name AS category_name
FROM products p
INNER JOIN categories c ON p.category_id = c.id;

SELECT p.id, p.category_id, p.name, c.name, c.user_id
FROM products p
INNER JOIN categories c ON p.category_id = c.id;

SELECT p.id, p.category_id, p.name, c.name, c.user_id
FROM products p
LEFT JOIN categories c ON p.category_id = c.id;

SELECT p.id, p.category_id, p.name, c.name, c.user_id
FROM products p
RIGHT JOIN categories c ON p.category_id = c.id;

SELECT p.id, p.category_id, p.name, c.name, c.user_id
FROM products p
CROSS JOIN categories c;
