-- EXERCISE 1


CREATE TABLE Student_Course (
    Student_ID  VARCHAR(10),
    Course_ID   VARCHAR(10),
    Instructor  VARCHAR(50),
    PRIMARY KEY (Student_ID, Course_ID)
);

CREATE TABLE Instructor_Info (
    Instructor       VARCHAR(50) PRIMARY KEY,
    Instructor_Phone VARCHAR(20)
);

INSERT INTO Student_Course (Student_ID, Course_ID, Instructor)
VALUES
('S01', 'C101', 'Mr. Rahim'),
('S02', 'C101', 'Mr. Rahim'),
('S03', 'C102', 'Ms. Nila'),
('S04', 'C103', 'Mr. Karim'),
('S05', 'C104', 'Mr. Rahim');

INSERT INTO Instructor_Info (Instructor, Instructor_Phone)
VALUES
('Mr. Rahim', '01711111111'),
('Ms. Nila',  '01822222222'),
('Mr. Karim', '01933333333');

SELECT * FROM Student_Course;
SELECT * FROM Instructor_Info;

-- EXERCISE 2


CREATE TABLE Orders_1NF (
    Order_ID  INT,
    Customer  VARCHAR(50),
    Item      VARCHAR(50),
    PRIMARY KEY (Order_ID, Item)
);

INSERT INTO Orders_1NF (Order_ID, Customer, Item)
VALUES
(1, 'Rahim', 'Pen'),
(1, 'Rahim', 'Pencil'),
(2, 'Karim', 'Book'),
(3, 'Sumon', 'Eraser'),
(3, 'Sumon', 'Pen');

SELECT * FROM Orders_1NF;
-- EXERCISE 3


CREATE TABLE Employee_3NF (
    Emp_ID   VARCHAR(10) PRIMARY KEY,
    Emp_Name VARCHAR(50),
    Dept_ID  VARCHAR(10)
);

CREATE TABLE Department_3NF (
    Dept_ID       VARCHAR(10) PRIMARY KEY,
    Dept_Name     VARCHAR(50),
    Dept_Location VARCHAR(50)
);

INSERT INTO Employee_3NF (Emp_ID, Emp_Name, Dept_ID)
VALUES
('E1', 'Rafi',  'D1'),
('E2', 'Karim', 'D2'),
('E3', 'Sumon', 'D1');

INSERT INTO Department_3NF (Dept_ID, Dept_Name, Dept_Location)
VALUES
('D1', 'HR', 'Dhaka'),
('D2', 'IT', 'Rajshahi');

SELECT * FROM Employee_3NF;
SELECT * FROM Department_3NF;

-- EXERCISE 4


CREATE TABLE Student_Course_2NF (
    Student_ID   VARCHAR(10),
    Student_Name VARCHAR(50),
    Course       VARCHAR(50),
    Instructor   VARCHAR(50),
    PRIMARY KEY (Student_ID, Course)
);

CREATE TABLE Instructor_2NF (
    Instructor       VARCHAR(50) PRIMARY KEY,
    Instructor_Phone VARCHAR(20)
);

INSERT INTO Student_Course_2NF (Student_ID, Student_Name, Course, Instructor)
VALUES
('S1', 'Rahim', 'DBMS', 'Karim'),
('S2', 'Karim', 'DBMS', 'Karim'),
('S3', 'Sumon', 'CN',   'Rafi');

INSERT INTO Instructor_2NF (Instructor, Instructor_Phone)
VALUES
('Karim', '01711111111'),
('Rafi',  '01722222222');

SELECT * FROM Student_Course_2NF;
SELECT * FROM Instructor_2NF;

-- EXERCISE 5


CREATE TABLE R_1NF (
    A VARCHAR(10) PRIMARY KEY,
    B VARCHAR(10),
    C VARCHAR(10)
);

INSERT INTO R_1NF (A, B, C)
VALUES
('A1', 'B1', 'C1'),
('A2', 'B2', 'C2'),
('A3', 'B3', 'C3');

CREATE TABLE R_2NF (
    A VARCHAR(10) PRIMARY KEY,
    B VARCHAR(10)
);

CREATE TABLE R_3NF (
    B VARCHAR(10) PRIMARY KEY,
    C VARCHAR(10)
);

INSERT INTO R_2NF (A, B)
VALUES
('A1', 'B1'),
('A2', 'B2'),
('A3', 'B3');

INSERT INTO R_3NF (B, C)
VALUES
('B1', 'C1'),
('B2', 'C2'),
('B3', 'C3');

SELECT * FROM R_1NF;
SELECT * FROM R_2NF;
SELECT * FROM R_3NF;