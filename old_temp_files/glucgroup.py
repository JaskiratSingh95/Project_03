import sqlite3
import pandas as pd

from pathlib import Path

database_path = "./Resources/grouped.sqlite"
Path(database_path).touch()

conn = sqlite3.connect(database_path)
c = conn.cursor()

c.execute('''CREATE TABLE stroke_info (id int PRIMARY KEY, gender text, age int, hypertension int, heart_disease int, ever_married text, work_type text, Residence_type text, avg_glucose_level float, bmi float, smoking_status text, stroke int)''')

csv_stroke = pd.read_csv("./Resources/stroke_bio.csv")
csv_stroke.to_sql("stroke_info", conn, if_exists='append', index=False)