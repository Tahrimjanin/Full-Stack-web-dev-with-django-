import matplotlib.pyplot as plt

# 1. Matplotlib Charts

# Line Chart
x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
y = [1, 2, 3, 4, 5, 6, 7, 8, 9]
plt.plot(x, y)
plt.savefig("line_chart.png")
plt.clf()  # Clear the figure for the next chart

# Bar Chart
languages = ["Python", "Java", "C++", "PHP"]
students = [120, 80, 60, 40]
plt.bar(languages, students)
plt.savefig("bar_chart.png")
plt.clf()

# Pie Chart
plt.pie(students, labels=languages, autopct='%1.1f%%')
plt.savefig("pie_chart.png")
plt.clf()

# Histogram
marks = [40, 50, 60, 70, 80, 90, 95, 85, 75, 65]
plt.hist(marks, bins=5)
plt.savefig("histogram.png")
plt.clf()

# Scatter Chart
plt.scatter(x, y)
plt.savefig("scatter_chart.png")
plt.clf()

# 2. List Examples

cities = ["Dhaka", "Khulna", "Barisal", "Ctg"]
cities.append("Saidpur")  # Add element at end
cities.insert(2, "Rajshahi")  # Insert at index 2
cities.remove("Khulna")  # Remove specific element
cities.pop()  # Remove last element
print("Cities List:", cities)

fruits = ["apple", "banana", "cherry", "date", "fig", "grape"]
print("Fruits slice [1:4]:", fruits[1:4])
print("Fruits slice [:4]:", fruits[:4])
print("Fruits slice [2:]:", fruits[2:])

# 3. Tuple Examples

cities_tuple = ("Dhaka", "Khulna", "Barisal", "Ctg")
print("Tuple:", cities_tuple)
print("Second city:", cities_tuple[1])
print("Tuple length:", len(cities_tuple))

# 4. Dynamic List (Chat)

chat = []
chat.append("windows license chai")
chat.append("if anyone know about it pls reply on it")
chat.append("sir amader ki cybersecurity related kono project thakbe?")
chat.append("Bhaiya ektu repeat korben buji nai")
chat.remove("windows license chai")  # Remove specific chat
print("Chat List:", chat)

# 5. Set Examples

cities_set = {"Dhaka", "Khulna", "Barisal", "Ctg"}
cities_set.add("Saidpur")  # Add element
cities_set.remove("Khulna")  # Remove element
print("Cities Set:", cities_set)
print("Set Length:", len(cities_set))

# 6. Dictionary Examples

course = {
    "title": "Web Development with Python, Django & React",
    "type": "Online",
    "batch": 13,
    "rating": 4.7,
    "lessons": 58,
    "students": 824,
}

print("Course Title:", course["title"])
course.update({"batch": 14})  # Update a key-value
course.pop("students")  # Remove a key
print("Updated Course Dictionary:", course)

# Another dictionary with nested list
course = {
    "title": "App Development Flutter",
    "type": "Online",
    "batch": 13,
    "rating": 4.7,
    "lessons": 58,
    "students": 824,
    "topic": ['Python', 'Django', 'React'],  # Nested list
}

print("Second topic in course:", course["topic"][1])

# 7. JSON-like List Example

Bangla = {"subject": "Bangla", "marks": 50}
English = {"subject": "English", "marks": 80}
Math = {"subject": "Math", "marks": 90}

Marks = [Bangla, English, Math]  # JSON Array equivalent
print("Marks JSON Array:", Marks)
