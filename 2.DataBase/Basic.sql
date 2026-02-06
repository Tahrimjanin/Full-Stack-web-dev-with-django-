-- Active: 1769617333358@@127.0.0.1@3306@practice
-- veriable declaration by SET ,";" means end
SET @num1= 20; 
SET @num2= 6;
-- selet like print
SELECT
 @num1 + @num2 AS Addition ,
    @num1 - @num2 AS Subtraction,
    @num1 * @num2 AS Multiplication,
    @num1 / @num2 AS Division,
    @num1 % @num2 AS Modulus,
    Power(@num1 , 2) AS Power ,
    Sqrt(@num1) AS SquareRoot ,
    Round( @num1 / @num2) AS Rounding,
    ABS(- @num2) AS AbsoluteValue ,
    LOG10(@num1) AS LogBase10,
    LN(@num1) AS NaturalLogarithm ,
    GREATEST(@num1 , @num2) AS GreatestValue,
    LEAST(@num1 , @num2) AS LeastValue ;
    
   --- create table example
   CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    designation VARCHAR(50),
    salary DECIMAL(10, 2)
) 