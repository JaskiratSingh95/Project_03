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
                data: data.map(d => ({
                    x: parseFloat(d.bmi),
                    y: parseFloat(d.avg_glucose_level),
                    color: d.stroke === 1 ? 'red' : 'green'
                }))
            }],
            plotOptions: {
                series: {
                    turboThreshold: data.length, // Set turboThreshold to the number of data points
                    marker: {
                        radius: 3 // Set the radius of data points to make them smaller
                    }
                }
            },
            accessibility: {
                enabled: true // Enable accessibility module
            }
        });
    })
    .catch(error => console.error('Error fetching or processing scatterplot data:', error));