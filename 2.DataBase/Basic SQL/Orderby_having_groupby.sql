CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName  VARCHAR(50),
    LastName   VARCHAR(50),
    HireDate   VARCHAR(50),
    Salary     DECIMAL(10, 2),
    Department VARCHAR(50)
);

INSERT INTO Employees (EmployeeID, FirstName, LastName, HireDate, Salary, Department)
VALUES
(1, 'John',  'Doe',     '2021-05-14', 60000.00, 'IT'),
(2, 'Jane',  'Smith',   '2020-11-22', 55000.00, 'Finance'),
(3, 'Emily', 'Johnson', '2019-03-30', 75000.00, 'HR'),
(4, 'Mike',  'Brown',   '2023-01-12', 62000.00, 'IT'),
(5, 'Anna',  'Davis',   '2022-09-10', 58000.00, 'Finance');

SELECT * FROM Employees
ORDER BY LastName ASC;

SELECT * FROM Employees
ORDER BY Department ASC, Salary DESC;

SELECT * FROM Employees
ORDER BY HireDate DESC;

SELECT FirstName, Salary AS AnnualSalary FROM Employees
ORDER BY AnnualSalary ASC;

SELECT Department, COUNT(*) AS Total_employee
FROM Employees
GROUP BY Department;

SELECT Department, AVG(Salary) AS Avg_Salary
FROM Employees
GROUP BY Department;

SELECT Department, MAX(Salary) AS Max_Salary
FROM Employees
GROUP BY Department;

SELECT Department, COUNT(*) AS Employee
FROM Employees
GROUP BY Department
HAVING COUNT(*) > 1;

SELECT Department, SUM(Salary) AS Total_Salary
FROM Employees
GROUP BY Department;

ALTER TABLE Employees
ADD City VARCHAR(50);

UPDATE Employees SET City = 'Dhaka'      WHERE EmployeeID = 1;
UPDATE Employees SET City = 'Chittagong' WHERE EmployeeID = 2;
UPDATE Employees SET City = 'Dhaka'      WHERE EmployeeID = 3;
UPDATE Employees SET City = 'Sylhet'     WHERE EmployeeID = 4;
UPDATE Employees SET City = 'Chittagong' WHERE EmployeeID = 5;

SELECT Department, City, SUM(Salary) AS Total_Salary
FROM Employees
GROUP BY Department, City;

SELECT Department, COUNT(*) AS Total_emp
FROM Employees
GROUP BY Department;

SELECT Department, SUM(Salary) AS Total_Salary
FROM Employees
GROUP BY Department
HAVING SUM(Salary) > 100000;

SELECT Department, City, AVG(Salary) AS Avg_Salary
FROM Employees
GROUP BY Department, City;