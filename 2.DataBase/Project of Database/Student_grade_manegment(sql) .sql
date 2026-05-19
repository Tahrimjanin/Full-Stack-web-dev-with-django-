create table Student(
Student_id int primary key,
Student_name varchar(50),
Enrollment_year varchar(50)

);

create table Course(
Course_id int primary key,
Course_name varchar(50),
Credit float not null

);

create table Enrollment(
Enrollment_id int primary key,
Student_id int,
Course_id int,
foreign key(Student_id) references Student(Student_id),
foreign key(Course_id) references Course(Course_id)

);

create table Grade(
Grade_id int primary key,
Grade float,
Enrollment_id int,
foreign key(Enrollment_id) references Enrollment(Enrollment_id)

);


insert into Student(Student_id,Student_name,Enrollment_year)
values
(1,'Alice Johnson','2024'),
(2,'Alice Johnson','2023'),
(3,'Bob Smith','2024');

insert into Course(Course_id,Course_name,Credit)
values
(3105,'Computer Network',3.00),
(3102,'Database System',3.00),
(3106,'Database Lab',1.50);

insert into Enrollment(Enrollment_id,Student_id,Course_id)
values
(1,1,3105),
(2,2,3102),
(3,3,3106);

--modify data type
alter table Grade
alter column Grade varchar(50);

insert into Grade(Grade_id,Grade,Enrollment_id)
values
(1,'B',1),
(2,'A',2),
(3,'C',3);

select * from Student;
select * from Course;
Select * from Enrollment;
Select * from Grade;


    SELECT s.Student_name,
           c.Course_name,
           g.Grade
    FROM Student s

    JOIN Enrollment e
    ON s.Student_id = e.Student_id

    JOIN Course c
    ON c.Course_id = e.Course_id

    JOIN Grade g
    ON g.Enrollment_id = e.Enrollment_id ;