
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName  VARCHAR(50),
    LastName   VARCHAR(50),
    Department VARCHAR(50),
    Salary     DECIMAL(10, 2),
    HireDate   DATE,
    Bonus      DECIMAL(10, 2)
);

INSERT INTO Employees (EmployeeID, FirstName, LastName, Department, Salary, HireDate, Bonus)
VALUES
(1, 'John',  'Doe',     'HR',    55000, '2021-05-14', 5000),
(2, 'Jane',  'Smith',   'IT',    62000, '2020-11-22', NULL),
(3, 'Emily', 'Johnson', 'IT',    57000, '2019-03-30', 3000),
(4, 'Mike',  'Brown',   'Sales', 49000, '2023-01-12', NULL),
(5, 'Anna',  'Davis',   'HR',    51000, '2022-09-10', 7000);

-- EXERCISE 1: Basic Sorting
-- Retrieve all employees sorted by LastName A to Z
SELECT *
FROM Employees
ORDER BY LastName ASC;

-- EXERCISE 2: Sorting by Multiple Columns
-- Sort by Department A to Z
-- Then by Salary highest to lowest within each Department

SELECT *
FROM Employees
ORDER BY Department ASC, Salary DESC;

-- EXERCISE 3: Sorting by Date
-- Sort by HireDate latest to oldest

SELECT *
FROM Employees
ORDER BY HireDate DESC;

-- EXERCISE 4: Sorting with Aliases
-- Show FirstName and Salary, rename Salary to AnnualSalary
-- Sort by AnnualSalary lowest to highest


SELECT FirstName, Salary AS AnnualSalary
FROM Employees
ORDER BY AnnualSalary ASC;

-- EXERCISE 5: Sorting with NULLs
-- Sort by Bonus with NULL values appearing last
-- Then sort by Salary lowest to highest


SELECT *
FROM Employees
ORDER BY
    CASE WHEN Bonus IS NULL THEN 1 ELSE 0 END ASC,
    Bonus ASC,
    Salary ASC;