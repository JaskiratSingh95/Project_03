import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

engine = create_engine("sqlite:///./Resources/stroke_db.sqlite")

Base = automap_base()

Base.prepare(autoload_with=engine)

stroke_predictors = Base.classes.stroke_predictors

app = Flask(__name__)

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/stroke_demographic_indicators<br/>"
        f"/api/v1.0/stroke_biological_indicators"
    )

@app.route("/api/v1.0/stroke_demographic_indicators")
def stroke_demographic_indicators():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all"""
    # Query all
    results = session.query(stroke_predictors.age, stroke_predictors.gender, stroke_predictors.ever_married, stroke_predictors.work_type, stroke_predictors.residence_type, stroke_predictors.stroke).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_subjects
    all_subjects = []
    for gender, age, ever_married, work_type, residence_type, stroke in results:
        subject_dict = {}
        subject_dict["gender"] = gender
        subject_dict["age"] = age
        subject_dict["ever_married"] = ever_married
        subject_dict["work_type"] = work_type
        subject_dict["residence_type"] = residence_type
        subject_dict["stroke"] = stroke
        all_subjects.append(subject_dict)

    return jsonify(all_subjects)

if __name__ == '__main__':
    app.run(debug=True)