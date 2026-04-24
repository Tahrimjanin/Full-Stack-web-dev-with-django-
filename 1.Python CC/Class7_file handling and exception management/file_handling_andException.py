"""
try:
    x = 100
    y = 0
    div = x / y
except Exception as error:
    print(f"Something went wrong Error: {error}")

try:
    x = 100
    y = 0
    result = x / y
    print(result)
except Exception as error:
    print(f"Something went wrong Error: {error}")
finally:
    print("Done")
"""

"""
#
Write 
with open("demo.txt","w") as myFile:
    myFile.write("This is the demo file.")

# Read 
with open ("demo.txt","r") as myFile:
    content =myFile.read()
    print(content)    

# Rename 
import os
os.rename("demo.txt","new.txt")    


# Delete
import os
os.remove("TODO/demo.txt")

import os
os.mkdir("new1/new2/new3")

import os
os.rename("new1/new2/new3","new1/new2/new_new3")

# Create Folder
import os
os.rmdir("new1/new2/new_new3") # directory delect korte rmdir use kore

"""

"""
try:
    with open("new.txt", "r") as myFile:
        content = myFile.read()
        print(content)
except Exception as error:
    print(f"Something went wrong Error: {error}")
"""

"""
- file database text file, CSV File 
- database (SQL)


with open ("demo.txt","r") as myFile:
    content =myFile.read()
    print(content)   

with open ("demo.csv","r") as myFile:


def demo():
    try:
        x = 100
        y = 0
        div = x / y
        return div
    except Exception as error:
        print(f"Something went wrong Error: {error}")
        return False           
"""










