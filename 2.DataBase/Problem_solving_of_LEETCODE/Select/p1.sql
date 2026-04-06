-- Active: 1770224516812@@127.0.0.1@3306@mysql

--https://leetcode.com/problems/recyclable-and-low-fat-products/description/?envType=study-plan-v2&envId=top-sql-50

CREATE TABLE Product (
    product_id INT PRIMARY KEY,
    low_fats VARCHAR(1),
    recyclable VARCHAR(1)
);

INSERT INTO Product VALUES (0, 'Y', 'N');

INSERT INTO Product VALUES
(1, 'Y', 'Y'),
(2, 'N', 'Y'),
(3, 'Y', 'Y'),
(4, 'N', 'N');

SELECT product_id
FROM Product
WHERE low_fats = 'Y' AND recyclable = 'Y';