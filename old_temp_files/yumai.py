from flask import Flask, jsonify, render_template
import sqlite3
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('yumai.html')

@app.route('/api/data')
def get_data():
    conn = sqlite3.connect('Resources/stroke_db.sqlite')  # Ensure database path is correct
    # Use Pandas to read data directly into DataFrame
    df = pd.read_sql_query("SELECT age, gender, hypertension, heart_disease, avg_glucose_level, bmi, work_type, smoking_status, stroke FROM stroke_info", conn)
    conn.close()

    # Compute the correlation matrix
    correlation_matrix = df.corr().values.tolist()  # Convert DataFrame to list for JSON serialization
    print(correlation_matrix)
    # Return data necessary for heatmap
    return jsonify({
        'z': correlation_matrix,
        'x': df.columns.tolist(),  # Column labels
        'y': df.columns.tolist()   # Row labels
    })

if __name__ == '__main__':
    app.run(debug=True)