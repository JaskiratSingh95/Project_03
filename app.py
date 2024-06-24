import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask
from flask_cors import CORS


from flask import Flask, jsonify, request

engine = create_engine("sqlite:///./Resources/stroke_db.sqlite")

Base = automap_base()

Base.prepare(autoload_with=engine)

stroke_predictors = Base.classes.stroke_predictors

app = Flask(__name__)
CORS(app)

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"<h1> Welcome to our Stroke Exploratory Page!</h1><br/>"
        f"<h2> Available Information Routes: </h2><br/>"
        f"<h3> Data </h3><br/>"
        f"/api/v1.0/stroke_demographic_predictors_data<br/>"
        f"/api/v1.0/stroke_biological_predictors_data<br/>"
        f"<h3> Visualizations </h3><br/>"
        f"/api/v1.0/stroke_visualizations"
    )

@app.route("/api/v1.0/stroke_demographic_predictors_data")
def stroke_demographic_predictors_data():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all"""
    # Query all
    results = session.query(stroke_predictors.age, stroke_predictors.gender, stroke_predictors.ever_married, stroke_predictors.work_type, stroke_predictors.Residence_type, stroke_predictors.stroke).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_subjects
    all_subjects = []
    for gender, age, ever_married, work_type, Residence_type, stroke in results:
        subject_dict = {}
        subject_dict["gender"] = gender
        subject_dict["age"] = age
        subject_dict["ever_married"] = ever_married
        subject_dict["work_type"] = work_type
        subject_dict["Residence_type"] = Residence_type
        subject_dict["stroke"] = stroke
        all_subjects.append(subject_dict)
    
    return jsonify(all_subjects)

@app.route("/api/v1.0/stroke_biological_predictors_data")
def stroke_biological_predictors_data():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all"""
    # Query all
    results = session.query(stroke_predictors.age, stroke_predictors.gender, stroke_predictors.hypertension, stroke_predictors.heart_disease, stroke_predictors.avg_glucose_level, stroke_predictors.bmi, stroke_predictors.smoking_status, stroke_predictors.stroke).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_subjects
    all_subjects = []
    for gender, age, hypertension, heart_disease, avg_glucose_level, bmi, smoking_status, stroke in results:
        subject_dict = {}
        subject_dict["gender"] = gender
        subject_dict["age"] = age
        subject_dict["hypertension"] = hypertension
        subject_dict["heart_disease"] = heart_disease
        subject_dict["avg_glucose_level"] = avg_glucose_level
        subject_dict["bmi"] = bmi
        subject_dict["smoking_status"] = smoking_status
        subject_dict["stroke"] = stroke
        all_subjects.append(subject_dict)

    return jsonify(all_subjects)

if __name__ == '__main__':
    app.run(debug=True)