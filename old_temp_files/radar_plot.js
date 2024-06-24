function loadData() {
    fetch("/api/v1.0/stroke_biological_predictors_data")
        .then(response => response.json())
        .then(data => {
            generate(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

const data = {
    labels: [
      'stroke',
      'smoking',
      'age'
    ],
    datasets: [{
      label: 'bmi',
      data: subject_dict.bmi,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };