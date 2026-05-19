CREATE TABLE Student(
StudentID INT PRIMARY KEY ,
StudentAge VARCHAR(50) ,
StudentGPA VARCHAR(50) ,
);

CREATE TABLE Course (
    RID  INT PRIMARY KEY,
    CourseCode VARCHAR(20),
    CGPA       VARCHAR(10),
    StudentID  INT,
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID)
);

INSERT INTO Student VALUES 
(1, '20', '3.80'),
(2, '22', '3.50'),
(3, '21', '3.90');


INSERT INTO Course VALUES 
(1, 'CSE101', '3.80', 1),
(2, 'CSE203', '3.50', 2),
(3, 'CSE305', '3.90', 3);


SELECT * FROM Student ;

SELECT * FROM Course ;





























