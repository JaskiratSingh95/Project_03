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



SELECT * FROM stroke_predictors;
SELECT * FROM demographic;
SELECT * FROM biological;
