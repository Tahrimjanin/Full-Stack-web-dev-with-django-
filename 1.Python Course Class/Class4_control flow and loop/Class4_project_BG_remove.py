""" target :image background remover
1.package
 - pillow - any type of image working
 - rembg

"""

from PIL import Image
from rembg import remove

imgFile=Image.open("pic.jpg")
outputFile = remove(imgFile)
outputFile.save("output.png")


