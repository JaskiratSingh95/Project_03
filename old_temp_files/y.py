import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask
from flask_cors import CORS


from flask import Flask, jsonify, request

engine = create_engine("C:/Users/yumai/GITHUB/Project_03/Resources/stroke_bio.csv")

Base = automap_base()

Base.prepare(autoload_with=engine)

stroke_predictors = Base.classes.stroke_predictors

app = Flask(__name__)
CORS(app)

@app.route('/')
def welcome():
    return (f"/api/swarm_plot_data")

@app.route("/api/swarm_plot_data")
def swarm_plot_data():
    session = Session(engine)
    results = session.query(stroke_predictors.age, stroke_predictors.gender, stroke_predictors.heart_disease, stroke_predictors.hypertension, stroke_predictors.avg_glucose_level, stroke_predictors.bmi, stroke_predictors.work_type, stroke_predictors.smoking_status, stroke_predictors.stroke).all()
    session.close()

    data = []
    for gender, age, hypertension, heart_disease, avg_glucose_level, bmi, work_type, smoking_status, stroke in results:
        subject_dict = {}
        subject_dict["gender"] = gender
        subject_dict["age"] = age
        subject_dict["hypertension"] = hypertension
        subject_dict["heart_disease"] = heart_disease
        subject_dict["avg_glucose_level"] = avg_glucose_level
        subject_dict["bmi"] = bmi
        subject_dict["work_type"] = work_type
        subject_dict["smoking_status"] = smoking_status
        subject_dict["stroke"] = stroke
        data.append(subject_dict)

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)