fetch('http://127.0.0.1:5000/api/v1.0/stroke_biological_predictors_data')
    .then(response => response.json())
    .then(data => {
        console.log('Fetched data:', data);

        function createScatterPlot(data) {
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
                        text: 'BMI'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Average Glucose Level'
                    }
                },
                series: [{
                    name: 'Non-Stroke Participants',
                    data: data.filter(d => d.stroke === 1).map(d => ({
                        x: parseFloat(d.bmi),
                        y: parseFloat(d.avg_glucose_level),
                        color: 'lime'
                    }))
                }, {
                    name: 'Stroke Participants',
                    data: data.filter(d => d.stroke === 0).map(d => ({
                        x: parseFloat(d.bmi),
                        y: parseFloat(d.avg_glucose_level),
                        color: '#e0b0ff'
                    }))
                }],
                plotOptions: {
                    series: {
                        turboThreshold: data.length,
                        marker: {
                            radius: 2,
                            fillOpacity: 0.5
                        }
                    }
                },
                accessibility: {
                    enabled: true
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'middle',
                    layout: 'vertical',
                    symbolRadius: 15
                }
            });
        }

        createScatterPlot(data);
    })
    .catch(error => console.error('Error fetching or processing scatterplot data:', error));