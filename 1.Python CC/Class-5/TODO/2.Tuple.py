"""
cities=("Dhaka","Khulna","Barisal","Ctg")
print(id(cities))
cities.append("Saidpur")
print(id(cities))
print(cities)


cities1=("Dhaka","Khulna","Barisal","Ctg")
cities2=("London","Newyork","Lahor","Delhi")
cities1.extend(cities2)
print(cities1)

cities=("Dhaka","Khulna","Barisal","Ctg")
cities.insert(2,"Saidpur")
print(cities)

cities=("Dhaka","Khulna","Barisal","Ctg")
cities.remove("Khulna")
print(cities)

cities=("Dhaka","Khulna","Barisal","Ctg")
cities.pop()
print(cities)

cities=("Dhaka","Khulna","Barisal","Ctg")
cities.clear()
cities=("London","Newyork","torento","katmandu")
print(cities)


cities=("Dhaka","Khulna","Barisal","Ctg")
index=cities.index("Barisal")
print(index)

cities=("Dhaka","Khulna","Barisal","Ctg","Barisal")
count = cities.count("Barisal")
print(count)

cities=("Dhaka","Khulna","Barisal","Ctg","Barisal")
cities.sort()
cities.reverse()
print(cities)

cities=("Dhaka","Khulna","Barisal","Ctg","Barisal")
length=len(cities) #1,2,3,
print(length)

fruits = ("apple", "banana", "cherry", "date", "fig", "grape")
print(fruits[1:4])
print(fruits[:4])
print(fruits[2:])
"""

#Dyanmic Content

chat=[]
chat.append("window license চাইছে মনে হচ্ছে ভাইয়া")
chat.append("if anyone know about it pls reply on it")
chat.append("sir amader ki cybersecurity related kono project thakbe?")
chat.append("Bhaiya ektu repeat korben buji nai")
chat.remove("window license চাইছে মনে হচ্ছে ভাইয়া")
print(chat)












