#pip install deepface for image processing
#pip install tf-keras
"""from deepface import DeepFace
result = DeepFace.verify("pic1.jpeg","pic2.jpeg")
print(result)"""

from deepface import DeepFace
from pprint import pprint

result = DeepFace.analyze(
    img_path="pic1.jpeg",
    actions=["gender", "emotion", "race"],
    detector_backend="opencv",  # Much lighter than retinaface
    enforce_detection=True
)

pprint(result)
