function get_data() {
  const url = 'http://127.0.0.1:5000/api/v1.0/stroke_biological_predictors_data'
  fetch(url)
  .then(response => response.json())
  .then(data => {
      makeChart(data);
  })
}

var 