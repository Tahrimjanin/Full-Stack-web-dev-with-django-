import json
import requests
from datetime import datetime,date,time,timedelta
"""
# Python Dict---> JSON
Ieltify_Dict = {
    "name":"Ieltify-IELTS Prep & Mock Test",
    "Downloads":100,
    "Type":"Android",
    "Tech":"Flutter"
}

Ieltify_JSON= json.dumps(Ieltify_Dict)
print(Ieltify_JSON)



# JSON String---> Dict
json_string='{"name": "Ieltify-IELTS Prep & Mock Test", "Downloads": 100, "Type": "Android", "Tech": "Flutter"}'
dict_data = json.loads(json_string)
print(dict_data)


#  Python Dict---> JSON File
Dict_Data = {
    "name":"Ieltify-IELTS Prep & Mock Test",
    "Downloads":100,
    "Type":"Android",
    "Tech":"Flutter"
}

with open("Ieltify.json","w") as myFile:
    json.dump(Dict_Data,myFile)
    
    
# JSON File -----> Python Dict
with open ("Ieltify.json","r") as myFile:
    dict_data = json.load(myFile)

print(dict_data)    
"""


"""

print("Calling....")
response=requests.get("https://crud.teamrabbil.com/api/v1/ReadProduct")
print(response.status_code)
print(response.json())

URL="https://crud.teamrabbil.com/api/v1/CreateProduct"

dict_data={
    "ProductName":"Python B13",
    "ProductCode":"Python B13",
    "Img":"Python B13",
    "UnitPrice":"Python B13",
    "Qty":"Python B13",
    "TotalPrice":"Python B13"
}

headers = {
    "content-type": "application/json",
    'Accept': 'application/json',
}

response=requests.post(url=URL,data=json.dumps(dict_data),headers=headers)
print(response.status_code)
print(response.json())



# Current Date Time
now=datetime.now()
print(now)

# Only Date or Time
today_date=date.today()
this_time=datetime.now().time()
print(today_date)
print(this_time)

# Data Formating
date_string=datetime.now()
formatted_date1=date_string.strftime("%d/%m/%Y")
formatted_date2=date_string.strftime("%d/%m/%Y %H:%M")
print(formatted_date2)


# Date Time Delta
now=datetime.now()
now_plus_7Days=now+timedelta(days=7) # days=7, hours=7, minutes=8, milliseconds=, microseconds,
now_minus_7Days=now-timedelta(days=7)
print(now_minus_7Days)


# Date Time Diff
date1=datetime(2025,1,1)
date2=datetime(2024,5,5)
diff=date1-date2
print(diff) # Days

"""


date_string=datetime.now()
formatted_date1=date_string.strftime("%d/%m/%Y")
formatted_date2=date_string.strftime("%d/%m/%Y %H:%M")    # %H=24 Hour Formate
formatted_date3=date_string.strftime("%d/%m/%Y %I:%M %p") #I=12 Hour Formate , %p= AM PM
print(formatted_date2)
print(formatted_date2)
print(formatted_date3)







