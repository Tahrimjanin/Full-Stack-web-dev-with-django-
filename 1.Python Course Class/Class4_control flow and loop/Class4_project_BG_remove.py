""" target :image background remover
1.package
 - pillow - any type of image working
 - rembg

"""

from PIL import Image
from rembg import remove
from io import BytesIO

imgFile=Image.open("pic.jpg")
outputFile = remove(imgFile)
if isinstance(outputFile, Image.Image):
	outputImage = outputFile
else:
	outputImage = Image.open(BytesIO(outputFile))
outputImage.save("output.png")


