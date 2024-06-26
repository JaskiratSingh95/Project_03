fetch('http://127.0.0.1:5000/api/v1.0/stroke_biological_predictors_data')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched data:', data);

        Highcharts.chart('container', {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Swarm Plot for Glucose Level vs. BMI vs. Stroke'
            },
            xAxis: {
                title: {
                    text: 'Average Glucose Level'
                }
            },
            yAxis: {
                title: {
                    text: 'BMI'
                }
            },
            series: [{
                name: 'Kaggle: stroke-prediction-dataset',
                data: data.map(d => ({
                    x: parseFloat(d.bmi),
                    y: parseFloat(d.avg_glucose_level),
                    color: d.stroke === 1 ? 'red' : 'green'
                }))
            }],
            plotOptions: {
                series: {
                    turboThreshold: data.length,
                    marker: {
                        radius: 1 // smaller radius for datapoints
                    }
                }
            },
            accessibility: {
                enabled: true // Enable accessibility module
            }
        });
    })
    .catch(error => console.error('Error fetching or processing scatterplot data:', error));