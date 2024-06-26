# Project_03 - Stroke Predictors
Repository for Project 3 of Data visualization bootcamp (U of T SCS)
Project 3: Team 5 

## Project Overview and Purpose 

Dataset: Stroke Prediction Data set 

Dataset Source: https://www.kaggle.com/datasets/fedesoriano/stroke-prediction-dataset

	Libraries used: Pandas, Nympy, MatPlotLib, JSON, Flask, Sqlite, SQLAlchemy, Plotly, D3, HighCharts
 	
  	Languages used: Python, SQL, JavaScript, HTML, CSS
	
 	GitHub Link (SSH): git@github.com:JaskiratSingh95/Project_03.git
	
 	Contributors of the projects: Yumai Situ, Jelena Raonic, Nicole Rennie, Jaskirat Singh

**HIGH LEVEL PROBLEM STATEMENT** 
	
How can patients of higher stroke risk be more easily identified through measurable, and potentially modifiable, metrics in lifestyle and health status?  

**HYPOTHESIS** 

Stress-related lifestyle indicators are additive in effect when combined with indicators of compromised health, and this combination within specific high-risk cohorts can exacerbate risk of stroke.

**Sub-questions covering 3 topics and an interactive dashboard:**

1. Demographic (*unchangeable metric*) - root categories: Gender, Age VS. Stroke
2. Lifestyle (*modifiable metric*) - root categories: Marital Type, Work Categories, Residence Type VS. Stroke
3. Health Status (*semi-modifiable metric*) - root categories: Hypertension, Heart Disease, Avg Glucose Level, BMI VS. Stroke.

## Interactive Dashboard to showcase the Visualizations ##

### Instructions on how to use and interact with the project and Purpose ###

The goal of this project is to create an interactive dashboard with visualizations of different categories VS Stroke using APIs to call the data from SQLite database. 

![project_diagram](https://github.com/JaskiratSingh95/Project_03/assets/161783742/abe7c1cc-05f9-418a-b97a-76bf56199bb0)

We used Python to clean and transform data and store it on SQLite database using SQLALchemy’s ORM.
Data is read from stroke_db.sqlite to create Flask API. 
Rendering the Flask API using D3 library and JavaScript for the HTML.


Please follow these steps to interact with our data visualizations and dashboard: 
![Dashboard Screenshot](https://github.com/JaskiratSingh95/Project_03/assets/161783742/9998d341-6078-4864-8007-3ebadbbde2e3)

1. In our GitHub main branch, please navigate to the Resources folder to ensure that both csv files “healthcare-dataset-stroke-data.csv” and “stroke_clean.csv” as well as stroke_db.sqlite are present. 
The original file is the healthcare dataset csv, which was cleaned into stroke_clean.csv. 
2. The cleaning process can be found in file: “stroke_analysis_jelyum.ipynb” in the main branch in the folder final project 
3. Please open and run app.py in the Final Project Folder to load the flask app. 
**Important:** This step must be done before running the interactive dashboard.
4. We have prepared three visualizations, all interactive and housed in our interactive dashboard. Please ensure you are in the Final Project Folder before you begin. To view our interactive dashboard, navigate to the index.html to generate the live preview of the interactive dashboard. The javascript for this html is also in the static folder under the name logicplots.

	>a. To view Demographic and Lifestyle related trends, please select “Age and Gender” or “Demographic Factors” in the drop down selection box. Both will display an interactive HeatMap generated through the Plotly Library.

	>b. To view our interactive graph (prepared from the library HighCharts), navigate to “Biological Factors” in the drop down. This will open up an interactive graph evaluating the interactions between BMI and Blood Glucose Level, according to stroke versus non-stroke patients. Hovering over data points will show pop-up data labels that state the specific x and y values (bmi and BGL). To visualize trends, hovering over a datapoint group will fade the opposing group and allow for better visualization of distribution and trends. By selecting a specific region, you can zoom into that section of the graph.

## Ethical Considerations ##

In this project, we made efforts to ensure ethical considerations are met. The data used is anonymized to protect patient privacy. We focused on providing insights that can help in preventive healthcare without causing undue alarm or stigma to any group. Additionally, we ensure transparency in our methodology and limitations of our analysis to avoid misinterpretation of results.

The use of measurable, standardized metrics such as BMI or Glucose level could bring to the project significance bias, and may lessen the impact of the results in the case where this data cannot be reliably extrapolated. Particularly in instances of healthcare research, we are careful not to extrapolate data in a way where it does not apply to a large majority of the population in the area of interest. In this study, anonymization is both able to allow for protection of patient health information and tracking, but also limits extrapolation for applicable populations and geographical locations.Therefore, there must be a balance between patient protection and usability of the research data. 

Consideration has also been made to understand the potential personal health information included in this dataset, despite involvement in the study being assumed voluntary. Part of our process of providing transparency is to declare our source codes and data source. This is to ensure we are doing our part in limiting data abuse and ensuring we are transparent in our approach. The HIPAA act is particularly relevant in our study, considering sensitive data such as gender, age, and medical history are made public (and potentially served on a browser or database). This brings to the forefront the importance of understanding ethical concerns regarding data collection and manipulation, and the critical role collaboration and understanding between researchers and data analysts play in furthering data use. 

## Data Source References ##

Stroke Prediction Dataset on Kaggle:

https://www.kaggle.com/datasets/fedesoriano/stroke-prediction-dataset

Blood Glucose Level Info Link: 

https://www.who.int/data/gho/indicator-metadata-registry/imr-details/2380#:~:text=Rationale%3A,and%20monitoring%20glycemia%20are%20recommended.

BMI Info Link: 

https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html

Image source: 

https://www.google.com/search/about-this-image?img=H4sIAAAAAAAA_wEXAOj_ChUI69D5sebEwbTJARDnzPqVxdiA0iuiCgGYFwAAAA%3D%3D&q=https:%2F%2Fwww.news-medical.net%2Fnews%2F20211117%2FRaising-awareness-of-stroke-and-how-to-prevent-it.aspx&ctx=iv&hl=en-CA&sa=X&ved=0CA0Qg4ILahcKEwjg5I6MyfWGAxUAAAAAHQAAAAAQBA 

## Code References ##

Python scripts for data cleaning and transformation.

Jupyter notebooks for data analysis and visualization.

Flask application for serving the API.

HTML and JavaScript files for the interactive dashboard.
https://flask.palletsprojects.com/en/3.0.x/patterns/javascript/

Additional JS Library and Template Used
https://www.highcharts.com/docs/index 



