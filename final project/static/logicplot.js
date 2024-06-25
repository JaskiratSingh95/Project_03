// script for logic.js
// Getting the dropdown menu and visualization container elements ready for deployment
// const selectElement = document.getElementById('options');
const selectElement = document.getElementById('stroke-factors');
const visualizationContainer = document.getElementById('visualization');
console.log('logicplot.js is running');
function runOption1Script() {
    console.log('Running option 1 script for Age and Gender on Stroke');
    // Call the script for "Effect of age and gender on stroke"
    const visualization = visualizeAgeGenderStroke();
    console.log("random2");
    console.log(visualization);
    displayVisualization(visualization);
  }
  
  function runOption2Script() {
    console.log('Running option 2 script for biological factors on stroke');
    // Call the script for "Effect of biological factors on stroke"
    const visualization = visualizeBiologicalFactorsStroke();
    displayVisualization(visualization);
  }
  
  function runOption3Script() {
    console.log('Running option 3 script for demographic factors on stroke');
    // Call the script for "Effect of demographic factors on stroke"
    const visualization = visualizeDemographicFactorsStroke();
    console.log(visualization);
    displayVisualization(visualization);
  }
  
// Add an event listener to the dropdown menu
selectElement.addEventListener('change', (event) => {
    console.log('Event listener triggered!');
    // Get the value of the selected option
    const selectedOption = event.target.value;
    console.log(`You selected: ${selectedOption}`);


    // selectElement.addEventListener('change', (event) => {
    //   const selectedOption = event.target.value;

    // Clear the visualization container
    visualizationContainer.innerHTML = '';

    // Run the corresponding script based on the selected option
    switch (selectedOption) {
        case 'AgeGenderStroke':
        runOption1Script();
        break;
        case 'BiologicalFactorsStroke':
        runOption2Script();
        break;
        case 'DemographicFactorsStroke':
        runOption3Script();
        break;
        default:
        // Clear the visualization container if no option is selected
        console.log('Invalid selection');
        visualizationContainer.innerHTML = '';
  }
});

// Define placeholder functions for each option (we'll implement these later)

function visualizeAgeGenderStroke() {
  // Your script for visualizing the effect of age and gender on stroke
  // This could be a D3.js or Chart.js visualization, for example
  function loadData() {
    fetch('http://127.0.0.1:5000/api/data')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            plotHeatmap(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }

    // function plotHeatmap(data) {
    //     var trace = {
    //         z: data.z,
    //         x: data.x,
    //         y: data.y,
    //         type: 'heatmap',
    //         colorscale: 'Viridis'
    //     };

    //     var layout = {
    //         title: 'Correlation Matrix',
    //         xaxis: {
    //             tickangle: -45
    //         },
    //         yaxis: {
    //             autosize: true
    //         }
    //     };
        

    //     Plotly.newPlot('heatmap-container', [trace], layout);
    // }

    loadData();

    function plotHeatmap(data) { 
        var trace = {
            z: data.z,
            x: data.x,
            y: data.y,
            type: 'heatmap',
            colorscale: 'Viridis',
            text: data.z.map(row => row.map(cell => cell.toFixed(2))),
            // Formatting numbers to 2 decimal places 
            texttemplate: '%{text}',
            showscale: true
            // Ensures the color scale is shown 
        };
        var layout = { 
            title: 'Correlation Matrix of Age, Stroke and Comorbidities',
            xaxis: { tickangle: -45 },
            yaxis: { autosize: true },
            annotations: [] // We will populate this to show labels
        };
        // Optional: Create annotations for each cell to improve visibility
        for (var i = 0; i < data.y.length; i++){ 
            for (var j = 0; j < data.x.length; j++) { 
                var currentValue = data.z[i][j];
                if (currentValue != null) { // Skip null or undefined values 
                    var textColor = 'white'; 
                    if (currentValue > 0.7) { textColor = 'black'; } 
                    var result = { 
                        x: data.x[j], 
                        y: data.y[i], 
                        text: currentValue.toFixed(2), // Format the label 
                        xref: 'x1',
                        yref: 'y1', 
                        font: { color: textColor, size: 12 }, 
                        showarrow: false 
                    }; 
                    layout.annotations.push(result); 
                } 
            } 
        } 
        // document.getElementById('heatmap-stroke').innerHTML = '';
        // document.getElementById('heatmap-stroke').innerHTML = '';
        const graphAge = Plotly.react('heatmap-Age-gender', [trace], layout); 
        console.log("random3");
        console.log(graphAge);
        return [graphAge];

}
}

function visualizeBiologicalFactorsStroke() {
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
}

function visualizeDemographicFactorsStroke() {
  // The script for visualizing the effect of demographic factors on stroke 
  // JSON data for heatmaps
    const ctPropStroke = JSON.parse(`{"columns":[["Govt_job","Rural"],["Govt_job","Urban"],["Private","Rural"],["Private","Urban"],["Self-employed","Rural"],["Self-employed","Urban"],["children","Rural"],["children","Urban"]],"index":["No","Yes"],"data":[[0.0344827586,0.1724137931,0.1724137931,0.3103448276,0.0344827586,0.2068965517,0.0344827586,0.0344827586],[0.0590909091,0.0636363636,0.2863636364,0.3272727273,0.1363636364,0.1272727273,0.0,0.0]]}`);
            
    const ctPropNoStroke = JSON.parse(`{"columns":[["Govt_job","Rural"],["Govt_job","Urban"],["Never_worked","Rural"],["Never_worked","Urban"],["Private","Rural"],["Private","Urban"],["Self-employed","Rural"],["Self-employed","Urban"],["children","Rural"],["children","Urban"]],"index":["No","Yes"],"data":[[0.03125,0.0329861111,0.0040509259,0.0086805556,0.2384259259,0.228587963,0.0300925926,0.0295138889,0.1961805556,0.2002314815],[0.0778806256,0.0858601979,0.0,0.0,0.3134375997,0.3150335142,0.0989466965,0.1088413661,0.0,0.0]]}`);

    // Function to convert data to Plotly format
    function prepareHeatmapData(ctProp) {
        return {
            z: ctProp.data,
            x: ctProp.columns.map(col => col.join(' - ')),
            y: ctProp.index,
            type: 'heatmap',
            colorscale: 'YlGnBu',
            showscale: true,
            hoverongaps: false,
            text: ctProp.data.map(row => row.map(val => val.toFixed(2))), // add text annotations to the heatmaps
            textauto: true // enable automatic text formatting
        };
    }

    // Data for each heatmap
    const dataStroke = [prepareHeatmapData(ctPropStroke)];
    const dataNoStroke = [prepareHeatmapData(ctPropNoStroke)];

    // Layouts for stroke and No stroke
    const layoutStroke = {
        title: {
            text: 'Heatmap of Proportions: Marital Status vs Work Type vs Residence Type (Had a Stroke)',
            font: {
                family: 'Arial, sans-serif',
                size: 18,
                color: '#333'
            },
            xref: 'paper',
            x: 0.5,
        },
        xaxis: {
            title: 'Work Type and Residence Type',
            titlefont: {
                family: 'Arial, sans-serif',
                size: 14,
                color: '#333'
            },
            tickfont: {
                family: 'Arial, sans-serif',
                size: 12,
                color: '#333'
            }
        },
        yaxis: {
            title: 'Marital Status',
            titlefont: {
                family: 'Arial, sans-serif',
                size: 14,
                color: '#333'
            },
            tickfont: {
                family: 'Arial, sans-serif',
                size: 12,
                color: '#333'
            }
        },
        margin: {
            l: 100,
            r: 20,
            b: 100,
            t: 80,
            pad: 4
        }
    };

    const layoutNoStroke = {
        title: {
            text: 'Heatmap of Proportions: Marital Status vs Work Type vs Residence Type (No Stroke)',
            font: {
                family:'Arial, sans-serif',
                size: 18,
                color: '#333'
            },
            xref: 'paper',
            x: 0.5,
        },
        xaxis: {
            title: 'Work Type and Residence Type',
            titlefont: {
                family: 'Arial, sans-serif',
                size: 14,
                color: '#333'
            },
            tickfont: {
                family: 'Arial, sans-serif',
                size: 12,
                color: '#333'
            }
        },
        yaxis: {
            title: 'Marital Status',
            titlefont: {
                family: 'Arial, sans-serif',
                size: 14,
                color: '#333'
            },
            tickfont: {
                family: 'Arial, sans-serif',
                size: 12,
                color: '#333'
            }
        },
        margin: {
            l: 100,
            r: 20,
            b: 100,
            t: 80,
            pad: 4
        }
    };

    // Plot the heatmaps
    const graphStroke = Plotly.newPlot('heatmap-stroke', dataStroke, layoutStroke);
    const graphNoStroke = Plotly.newPlot('heatmap-no-stroke', dataNoStroke, layoutNoStroke);
    return [graphStroke, graphNoStroke];
}

// Function to display the visualization
function displayVisualization(visualization) {
    // Clear the visualization container
    visualizationContainer.innerHTML = '';
    console.log("random");
    console.log(visualization);
    // Append the new visualization to the container
    //visualizationContainer.appendChild(visualization);
    visualization.forEach((graph) => {
        visualizationContainer.appendChild(graph);
      });
  }
 

  
