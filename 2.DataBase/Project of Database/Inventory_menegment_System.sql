CREATE TABLE Suppliers (
    supplier_id      INT PRIMARY KEY IDENTITY(1,1),
    supplier_name    VARCHAR(100) NOT NULL,
    supplier_contact VARCHAR(100)
);

CREATE TABLE Products (
    product_id       INT PRIMARY KEY IDENTITY(1,1),
    product_name     VARCHAR(100) NOT NULL,
    product_category VARCHAR(100),
    supplier_id      INT,
    FOREIGN KEY (supplier_id) REFERENCES Suppliers(supplier_id)
);

CREATE TABLE Inventorys (
    product_id     INT PRIMARY KEY,
    stock_quantity INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE Transactions (
    transaction_id       INT PRIMARY KEY IDENTITY(1,1),
    product_id           INT,
    transaction_type     VARCHAR(50),
    transaction_quantity INT,
    transaction_date     DATE,
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

INSERT INTO Suppliers (supplier_name, supplier_contact)
VALUES
    ('Supplier A', '123-456-7890'),
    ('Supplier B', '987-654-3210'),
    ('Supplier C', '123-456-7890'),
    ('Supplier D', '987-654-3210'),
    ('Supplier F', '987-654-3210');

INSERT INTO Products (product_name, product_category, supplier_id)
VALUES
    ('Product X',  'Category 1', 1),
    ('Product Y',  'Category 2', 2),
    ('Product Z',  'Category 1', 3),
    ('Product X1', 'Category 2', 4),
    ('Product Y!', 'Category 2', 5);

INSERT INTO Inventorys (product_id, stock_quantity)
VALUES
    (1, 100),
    (2, 200),
    (3, 100),
    (4, 200),
    (5, 200);

INSERT INTO Transactions (product_id, transaction_type, transaction_quantity, transaction_date)
VALUES
    (1, 'purchase', 50, '2024-09-01'),
    (2, 'sale',     30, '2024-09-01'),
    (3, 'purchase', 50, '2025-09-01'),
    (4, 'sale',     30, '2025-09-01'),
    (5, 'purchase', 50, '2025-09-01');

SELECT
    p.product_name,
    p.product_category,
    s.supplier_name,
    i.stock_quantity,
    t.transaction_type,
    t.transaction_quantity,
    t.transaction_date
FROM Products p
JOIN Suppliers s
    ON p.supplier_id = s.supplier_id
JOIN Inventorys i
    ON p.product_id = i.product_id
JOIN Transactions t
    ON p.product_id = t.product_id;
