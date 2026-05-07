course={
    "title":"Web Development with Python, Django & React",
    "type":"Online",
    "batch":13,
    "rating":4.7,
    "lessons": 58,
    "students":824,
}

#print(course.keys())
#print(course.values())
#print(course['title'])
#course.update({"batch":14})
#print(course.pop("students"))


course.clear()


course={
    "title":"App Development Flutter",
    "type":"Online",
    "batch":13,
    "rating":4.7,
    "lessons": 58,
    "students":824,
    "topic":['Python','Django','React'],
}


print(course["topic"][1])

"""
Bangla={"subject":"Bangla","marks":50} #JSON OBJECT
English={"subject":"English","marks":80} #JSON OBJECT
Math={"subject":"Math","marks":90} #JSON OBJECT
Marks=[Bangla,English,Math]  # List ==> JSON Array
"""

