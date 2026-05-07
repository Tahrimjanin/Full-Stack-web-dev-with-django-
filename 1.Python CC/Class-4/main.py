from PIL import  Image as img
from rembg import remove as rm

imgFile=img.open("img.jpg")
outputFile=rm(imgFile)
outputFile.save("img_trns.png")

