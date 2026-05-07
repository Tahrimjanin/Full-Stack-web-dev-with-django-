import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error
import joblib


# Step 01 Load The Data Set
df = pd.read_csv('sales.csv')

# Step 02 Data set formating and sorting
df["date"]=pd.to_datetime(df["date"])
df=df.sort_values("date")

# Step 03 Create Lag Features
df["sales_lag_1"]=df["sales"].shift(1)
df["sales_lag_2"]=df["sales"].shift(2)
df["sales_lag_3"]=df["sales"].shift(3)
df["sales_lag_12"]=df["sales"].shift(12)

#Step 04 Missing Value Drop
df=df.dropna()

#Step 05 Input(X) and target(Y)
X=df[["sales_lag_1","sales_lag_2","sales_lag_3","sales_lag_12"]] # Prompt
Y=df['sales'] # Ans

#Step 06 Train-Test Split
train_size= int(0.8*len(df))
X_train=X[:train_size]
X_test=X[train_size:]

Y_train=Y[:train_size]
Y_test=Y[train_size:]

#Step 07 Create Model And Train
model = LinearRegression()
model.fit(X_train,Y_train)

#Step 08 Model Train Accuracy
y_pred = model.predict(X_test)
mae = mean_absolute_error(Y_test, y_pred)
print("Model MAE:",round(mae,2))


#Step 09 Save The Model
joblib.dump(model, 'model.pkl')

print("Model Trained Successfully")
print("Model Saved Successfully")

