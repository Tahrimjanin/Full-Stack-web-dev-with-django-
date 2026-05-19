CREATE TABLE Employee (
    employee_id INT PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    department  VARCHAR(50),
    salary      DECIMAL(10, 2),
    hire_date   DATE,
    address     VARCHAR(100),
    city        VARCHAR(50),
    country     VARCHAR(50)
);

INSERT INTO Employee (employee_id, name, department, salary, hire_date, address, city, country)
VALUES
(1,  'Alice Smith',   'Sales',     55000.00, '2021-03-15', '123 Main St',   'Dhaka',      'Bangladesh'),
(2,  'Bob Johnson',   'Marketing', 48000.00, '2019-07-23', '456 Oak Ave',   'Chittagong', 'Bangladesh'),
(3,  'Carol White',   'Sales',     60000.00, '2022-01-10', NULL,            'Sylhet',     'Bangladesh'),
(4,  'David Brown',   'Sales',     49000.00, '2020-09-01', '789 Pine Rd',   'Dhaka',      'Bangladesh'),
(5,  'Eve Davis',     'Sales',     65000.00, '2022-06-25', NULL,            'Rajshahi',   'Bangladesh'),
(6,  'George Clark',  'HR',        72000.00, '2018-05-10', '321 Elm St',    'Dhaka',      'Bangladesh'),
(7,  'Hannah Lewis',  'Marketing', 53000.00, '2020-11-30', NULL,            'Chittagong', 'Bangladesh'),
(8,  'Ivan Walker',   'IT',        80000.00, '2017-08-14', '654 Maple Ave', 'Sylhet',     'Bangladesh'),
(9,  'Grace Hall',    'Sales',     45000.00, '2023-02-20', '987 Cedar Blvd','Dhaka',      'Bangladesh'),
(10, 'Robert Young',  'HR',        67000.00, '2019-04-18', '111 River Rd',  'Rajshahi',   'Bangladesh');

-- AND OPERATOR EXERCISES

-- Exercise 3: Sales department, salary > 50000, hired after 2020-01-01
SELECT *
FROM Employee
WHERE department = 'Sales'
AND salary > 50000
AND hire_date > '2020-01-01';

-- Exercise 4: Marketing department, salary between 40000 and 60000, hired in 2019 or later
SELECT *
FROM Employee
WHERE department = 'Marketing'
AND salary BETWEEN 40000 AND 60000
AND hire_date >= '2019-01-01';

-- Exercise 5: Sales department, salary over 60000 OR hired after 2022-01-01
SELECT *
FROM Employee
WHERE department = 'Sales'
AND (salary > 60000 OR hire_date > '2022-01-01');

-- OR OPERATOR EXERCISES

-- Exercise 1: City is Dhaka OR name starts with G OR Country is Bangladesh
SELECT *
FROM Employee
WHERE city = 'Dhaka'
OR name LIKE 'G%'
OR country = 'Bangladesh';

-- Exercise 2: Country is Bangladesh AND name starts with G or R
SELECT *
FROM Employee
WHERE country = 'Bangladesh'
AND (name LIKE 'G%' OR name LIKE 'R%');

-- Exercise 3: Country is Bangladesh and starts with G, OR starts with R
SELECT *
FROM Employee
WHERE country = 'Bangladesh' AND name LIKE 'G%'
OR name LIKE 'R%';

-- NOT OPERATOR EXERCISES

-- Exercise 1: Employees NOT from Bangladesh
SELECT *
FROM Employee
WHERE NOT country = 'Bangladesh';

-- Exercise 2: Name does NOT start with A
SELECT *
FROM Employee
WHERE name NOT LIKE 'A%';

-- Exercise 3: employee_id NOT between 3 and 7
SELECT *
FROM Employee
WHERE employee_id NOT BETWEEN 3 AND 7;

-- Exercise 4: Employees NOT from Dhaka or Chittagong
SELECT *
FROM Employee
WHERE city NOT IN ('Dhaka', 'Chittagong');

-- Exercise 5: employee_id NOT greater than 5
SELECT *
FROM Employee
WHERE NOT employee_id > 5;

-- Exercise 6: employee_id NOT less than 5
SELECT *
FROM Employee
WHERE NOT employee_id < 5;

-- NULL VALUES EXERCISES

-- Exercise 1: Employees with NULL address
SELECT name, address, city
FROM Employee
WHERE address IS NULL;

-- Exercise 2: Employees with a value in address
SELECT name, address, city
FROM Employee
WHERE address IS NOT NULL;