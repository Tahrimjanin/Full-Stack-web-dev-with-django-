import joblib
import pandas as pd


# Step 01 Load The Model
model=joblib.load('model.pkl')


# Step 02 Prompt With Dataframe
input_data=pd.DataFrame({
    "sales_lag_1":[112000],
    "sales_lag_2":[180000],
    "sales_lag_3":[100300],
    "sales_lag_12":[70000],
})

# Step 03 Get Prediction for Next Month
next_month_sales=model.predict(input_data)
print(next_month_sales)