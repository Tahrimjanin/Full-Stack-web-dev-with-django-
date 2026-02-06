# 1. If–Else statement
marks = 90              # Assign 90 to the variable 'marks'

if marks >= 80:         # Check if marks is greater than or equal to 80
    print("Yes A+")     # Print this if condition is True
else:                   # Executes when the if condition is False
    print("No A+")      # Print this if marks is less than 80


# 2. Else-if ladder (grading system)
marks = 55              # Assign new value to marks

if 80 <= marks <= 100:  # Check if marks is between 80 and 100
    print("A+")         # Grade A+
elif 70 <= marks < 80:  # Check if marks is between 70 and 79
    print("A")          # Grade A
elif 60 <= marks < 70:  # Check if marks is between 60 and 69
    print("A-")         # Grade A-
elif 50 <= marks < 60:  # Check if marks is between 50 and 59
    print("B")          # Grade B
elif 40 <= marks < 50:  # Check if marks is between 40 and 49
    print("C")          # Grade C
elif 33 <= marks < 40:  # Check if marks is between 33 and 39
    print("D")          # Grade D
else:                   # Executes if none of the above conditions are True
    print("F")          # Fail


# 3. For loop with break and continue
codingList = ['Python','JavaScript','PHP','Java','C','C++',"Rust","Dart"]
# Create a list of programming languages

for item in codingList:     # Loop through each element in the list
    if item == "C":         # Check if the current item is "C"
        continue            # Skip "C" and move to the next iteration
        # break             # (If used) stops the loop completely
    print(item)             # Print the current item


"""
# For loop with mixed data types
codingList = [100, True, 100.50, None, 'Python','JavaScript','PHP','Java','C','C++',"Rust","Dart"]

for item in codingList:     # Loop through list with mixed data types
    print(item)             # Print each element
"""


"""
# Using enumerate() to get index and value
codingList = ['Python','JavaScript','PHP','Java','C','C++',"Rust","Dart"]

for i, item in enumerate(codingList):  # enumerate() gives index and value
    print(i)                            # Print index
    print(item)                         # Print value
"""


"""
# Using break with enumerate()
codingList = ['Python','JavaScript','PHP','Java','C','C++',"Rust","Dart"]

for i, item in enumerate(codingList):  # Loop with index and value
    if i == 4:                          # Check if index is 4
        break                           # Stop the loop
    print(item)                         # Print items before index 4
"""


# 4. While loop
codingList = ['Python','JavaScript','PHP','Java','C','C++',"Rust","Dart"]
# Create a list for while loop

i = 0                   # Initialize loop counter
while i < len(codingList):  # Loop until i is less than list length
    print(codingList[i])    # Print element at index i
    i = i + 2               # Increase i by 2 (skip one element)


# 5. Loop over dictionary (key-value pairs)
person = {
    "name": "John",     # Key 'name' with value "John"
    "age": 18,          # Key 'age' with value 18
    "city": "Dhaka"     # Key 'city' with value "Dhaka"
}

for key, value in person.items():  # Loop through dictionary items
    print(f"Key: {key} value: {value}")
    # Print each key and its corresponding value
