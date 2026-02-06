# 1. Types (Multiline String)
name = """
Rajshahi University
of 'Engineering'
and Technology
"""
print(name)


# 2. String Indexing
name = "Python"

# Positive indexing: 0 1 2 3 4 5
# Negative indexing: -1 -2 -3 -4 -5 -6
print(name[-4])   # Access character using negative index


# 3. String Slicing
name = "Python Batch 13"

# name[start:end]
# End index is excluded
print(name[-1:-5])  # Returns empty string because slicing goes left to right


# 4. String Concatenation
name = " John"
age = "20"

# Using f-string
title = f"Name is {name} and age is {age}"

# Using + operator
text = 'Name is ' + name + ' and age is ' + age
print(text)


# 5. String Repetition
# Repeats the string multiple times
# text = "Hello, " * 10
# print(text)


# 6. String Methods
text = "Hello World"

print(text)
print(text.upper())       # Convert to uppercase
print(text.lower())       # Convert to lowercase
print(text.capitalize())  # Capitalize first letter
print(text.title())       # Title case
print(text.swapcase())    # Swap upper & lower case

# Replace substring
# print(text.replace("World", "Python"))

# Convert string to list
print(text.split(" "))

# Remove whitespace
print(text.strip())
print(text.lstrip())
print(text.rstrip())

# Count occurrences of a character
print(text.count("l"))


# 7. Numbers and Arithmetic Operations
a = 10
b = 20
c = 3.1614

print(a + b + c)  # Addition
print(a - b)      # Subtraction
print(a * b)      # Multiplication
print(a / b)      # Division
print(a // b)     # Floor division
print(a % b)      # Modulus
print(a ** b)     # Exponentiation


# 8. Type Conversion
x = 50
y = 3.1416
numbersSet = {1,2,3,4,5,6,7,8,9}
numbersList = [1,2,3,4,5,6,7,8,9]

print(float(x))          # int to float
print(int(y))            # float to int
print(str(x))            # int to string
print(complex(x))        # int to complex
print(list(numbersSet))  # set to list
print(set(numbersList))  # list to set
print(tuple(numbersSet)) # set to tuple


# 9. Math Module
import math

print(math.sqrt(5))                  # Square root
print(math.factorial(5))             # Factorial
print(math.fabs(5))                  # Absolute value
print(math.sin(math.radians(45)))    # Sine
print(math.cos(math.radians(45)))    # Cosine
print(math.tan(math.radians(45)))    # Tangent

print(math.log(10))                  # Natural log
print(math.log10(10))                # Base-10 log

print(math.gcd(50, 100))             # Greatest common divisor

print(math.pi)                       # Value of pi
print(math.e)                        # Euler’s number
