-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "stroke_predictors" (
    "id" int   NOT NULL,
    "gender" varchar(6)   NOT NULL,
    "age" int   NOT NULL,
    "hypertension" int   NOT NULL,
    "heart_disease" int   NOT NULL,
    "ever_married" varchar(3)   NOT NULL,
    "work_type" varchar(20)   NOT NULL,
    "Residence_type" varchar(10)   NOT NULL,
    "avg_glucose_level" numeric   NOT NULL,
    "bmi" varchar(10)   NOT NULL,
    "smoking_status" varchar(20)   NOT NULL,
    "stroke" int   NOT NULL,
    CONSTRAINT "pk_stroke_predictors" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "demographic" (
    "id" int   NOT NULL,
    "gender" varchar(6)   NOT NULL,
    "age" int   NOT NULL,
    "ever_married" varchar(3)   NOT NULL,
    "work_type" varchar(20)   NOT NULL,
    "Residence_type" varchar(10)   NOT NULL,
    "stroke" int   NOT NULL
);

CREATE TABLE "biological" (
    "id" int   NOT NULL,
    "gender" varchar   NOT NULL,
    "age" int   NOT NULL,
    "hypertension" int   NOT NULL,
    "heart_disease" int   NOT NULL,
    "avg_glucose_level" numeric   NOT NULL,
    "bmi" varchar(10)   NOT NULL,
    "smoking_status" varchar(20)   NOT NULL,
    "stroke" int   NOT NULL
);

ALTER TABLE "demographic" ADD CONSTRAINT "fk_demographic_id" FOREIGN KEY("id")
REFERENCES "stroke_predictors" ("id");

ALTER TABLE "biological" ADD CONSTRAINT "fk_biological_id" FOREIGN KEY("id")
REFERENCES "stroke_predictors" ("id");

