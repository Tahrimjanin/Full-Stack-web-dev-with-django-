from deepface import DeepFace

result = DeepFace.analyze(
    img_path="group.jpg",
    detector_backend="retinaface",
    actions=["age", "gender", "emotion", "race"],
    enforce_detection=True
)

print("Total Faces:", len(result))

for i, face in enumerate(result):
    print(f"\nFace {i+1}")
    print("Age:", face["age"])
    print("Gender:", face["dominant_gender"])
    print("Emotion:", face["dominant_emotion"])
    print("Race:", face["dominant_race"])
    print("Region:", face["region"])
