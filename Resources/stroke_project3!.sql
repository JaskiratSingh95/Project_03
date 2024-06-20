CREATE TABLE stroke_predictors (
	id INT PRIMARY KEY,
	gender VARCHAR(6),
	age NUMERIC,
	hypertension INT,
	heart_disease INT,
	ever_married VARCHAR(3), 
	work_type VARCHAR(20), 
	Residence_type VARCHAR(10), 
	avg_glucose_level NUMERIC, 
	bmi VARCHAR(10), 
	smoking_status VARCHAR(20), 
	stroke INT 
	);
	
CREATE TABLE demographic 
	AS (SELECT id, gender, age, ever_married, work_type, residence_type, stroke
	   		FROM stroke_predictors
);

 
CREATE TABLE biological 
	AS (SELECT id, gender, age, hypertension, heart_disease, avg_glucose_level, bmi, smoking_status, stroke
	   		FROM stroke_predictors
);

ALTER TABLE "demographic" ADD CONSTRAINT "fk_demographic_id" FOREIGN KEY("id")
REFERENCES "stroke_predictors" ("id");

ALTER TABLE "biological" ADD CONSTRAINT "fk_biological_id" FOREIGN KEY("id")
REFERENCES "stroke_predictors" ("id");


--#1
--imported healthcare-dataset-stroke-data.csv to stroke_predictors table
--check if the data is imported correctly

SELECT * FROM stroke_predictors;

--#2
--imported demographic-data.csv to demographic table
--check if the data is imported correctly
SELECT * FROM demographic;

--#3
--imported biological-data.csv to biological table
--check if the data is imported correctly
SELECT * FROM biological;
