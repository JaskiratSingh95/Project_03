Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontColor = '#333';

function get_data() {
    const url = 'http://127.0.0.1:5000/api/v1.0/stroke_biological_predictors_data'
    fetch(url)
    .then(response => response.json())
    .then(data => {
        makeChart(data);
    })
}

function makeChart(data) {
  // players is an array of objects where each object is something like:
  // {
  //   "Name": "Steffi Graf",
  //   "Weeks": "377",
  //   "Gender": "Female"
  // }

  var glucose = data.map(function(d) {return d.avg_glucose_level});
  var bmi = data.map(function(d) {return +d.bmi});
  var strokecolours = data.map(function(d) {return d.stroke === 1 ? '#F15F36' : '#19A0AA';});

  var chart = new Chart('chart', {
    type: 'horizontalBar',
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Weeks at No.1',
              fontSize: 16
            }
          }
        ]
      }
    },
    data: {
      labels: glucose,
      datasets: [
        {
          data: bmi,
          backgroundColor: strokecolours
        }
      ]
    }
  })
}