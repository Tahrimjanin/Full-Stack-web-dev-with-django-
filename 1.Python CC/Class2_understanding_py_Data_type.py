# 1. Create a dictionary named person
person = {
    "name": "Rabbi",
    "age": 35
}

# Print the dictionary
print(person)

# Print the memory address (ID) of the dictionary object
print(id(person))  # ID represents the memory location

# Change the value of age (dictionary is mutable)
person["age"] = 40  

# Print the dictionary after modification
print(person)

# Print the memory address again (ID remains the same)
print(id(person))


# 2. Numeric and string data types (dynamic typing)
age = 35          # Integer
price = 299.99    # Float
##x: complex = 1 + 2j        # Complex number

name = 'Rabbi'    # Single quote string
city = "Dhaka"    # Double quote string

address = '''
abort,
Dhaka,
Bangladesh
'''

university = """
Rajshahi University
of
Engineering &
Technology
"""

print(university)


# 3. List data type (mutable)
numbers = [35, 5.8, 67.5, "Rabbi", 'Dhaka', True, None]
print(numbers)


# 4. Tuple data type (immutable)
numbers = (35, 5.8, 67.5, "Rabbi", 'Dhaka', True, None)
print(numbers[4])


# 5. Range data type
numbers = range(0, 100, 3)
myList = list(numbers)
myTuple = tuple(numbers)
print(myTuple)


# 6. Dictionary data type (key-value pairs)
person = {
    "name": "Bill",
    "age": 60,
    "height": 5.9,
    "weight": "80KG",
    "mobile": 178538891,
    "shirt-color": "black",
    "hair-color": "black and white"
}

course = {
    "title": "Web Development with Python, Django & React",
    "fee": 8000,
    "rating": 4.7,
    "batch-no": 13,
    "lessons": 40,
    "students": 50,
    "instructor": ["Hasan", "Rabbi", "Setu", "Atanur"],
    "details": {
        "hours": 70,
        "lessons": 58,
        "students": 500
    }
}

IC = [course, course, course, course, course, course, course]
print(IC)


# 7. Set data type (stores unique values)
numbers = {1, 2, 3, "Rabi", True, False, None, "Rabi", 1, 2, 3}
print(numbers)


# 8. Frozen set data type (immutable set)
numbers = frozenset([1, 2, 3, "Rabi", True, False, None, "Rabi", 1, 2, 3])
print(numbers)


# 9. Boolean data type
isLogin = True
print(isLogin)


# 10. None data type
money = None
print(money)


# 11. Data type checking
a = 10
b = 20.20
c = "City"
numbers = [35, 5.8, 67.5, "Rabbi", 'Dhaka', True, None]
isLogin = True

print(type(isLogin))


# 12. Immutable data type example
x = 10
location1 = id(x)
x = 20
location2 = id(x)
x = 30
location3 = id(x)
x = 40
location4 = id(x)

print(location4)
