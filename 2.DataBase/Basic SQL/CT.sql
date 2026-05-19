
--Ans 01 

CREATE TABLE EMPL0YEE(
EmployeeID INT PRIMARY KEY ,
FirstName VARCHAR(50) ,
LastName VARCHAR(50) ,
Departtment VARCHAR(50) ,
Salary Decimal(10,2)
);

INSERT INTO EMPL0YEE VALUES
(1, 'John' , 'Doe' , 'HR' , 55000 ),
(2, 'Jane' , 'Smith' , 'IT' , 62000 ),
(3, 'Emily' , 'johnson' , 'IT' , 57000 ),
(4, 'Mike' , 'Brown' , 'Sales' , 49000 ),
(5, 'Anna' , 'Davis' , 'HR' , 51000 );

--- ans 2
UPDATE EMPLOYEE 
SET Salary = Salary * 1.10 
WHERE Department = 'IT' ;


SELECT * FROM EMPL0YEE

--- ans 3 
DELETE FROM EMPL0YEE
WHERE Salary <( 
     SELECT AVG(Salary) FROM EMPL0YEE) ;

--- ANS 4 
ALTER TABLE EMPL0YEE
ADD Position VARCHAR(50);

DELETE FROM EMPL0YEE
WHERE Position = 'Developer'
and Departtment = 'IT' ;

INSERT INTO EMPL0YEE VALUES
(3, 'tahrim' , 'Doe' , 'HR' , 55000 ,'student' );