-- Active: 1770224516812@@127.0.0.1@3306@mysql
-- https://leetcode.com/problems/find-customer-referee/?envType=study-plan-v2&envId=top-sql-50
select name 
from customer 
where referee_id != 2 or referee_id is null