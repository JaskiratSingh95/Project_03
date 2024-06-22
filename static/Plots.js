function loadData() {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            plotHeatmap(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function plotHeatmap(data) {
    var trace = {
        z: data.z,
        x: data.x,
        y: data.y,
        type: 'heatmap',
        colorscale: 'Viridis'
    };

    var layout = {
        title: 'Correlation Matrix',
        xaxis: {
            tickangle: -45
        },
        yaxis: {
            autosize: true
        }
    };

    Plotly.newPlot('myDiv', [trace], layout);
}

window.onload = loadData;


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
        title: 'Correlation Matrix',
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
    Plotly.newPlot('myDiv', [trace], layout); 
}