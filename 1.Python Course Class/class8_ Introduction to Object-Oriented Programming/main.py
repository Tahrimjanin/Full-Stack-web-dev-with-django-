from fastapi import FastAPI #pip install fastapi unicorn
from TODO.FileClass import DemoClass

app = FastAPI()

@app.get("/")
async def home():
    return "This is the home page"

@app.get("/add")
async def add():
    num1=10
    num2=20
    return num1+num2

@app.get("/addWithInput")
async def addWithInput(num1:int,num2:int):
    return num1+num2


@app.delete("/demo")
async def demo():
    obj = DemoClass(500,"Python Batch 13")
    return obj.batch




