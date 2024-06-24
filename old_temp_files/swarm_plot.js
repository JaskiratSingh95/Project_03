var margin = {top: 10, right: 30, bottom: 30, left: 40},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    var svg = d3.select("#my_dataviz")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

d3.csv("./Resources/stroke_clean.csv", function(data) {
    var y = d3.scaleLinear()
    .domain([ 3.5,8 ])  
  svg.append("g").call( d3.axisLeft(y))
    
    var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(["setosa", "versicolor", "virginica"])
    .padding(0.05)     // This is important: it is the space between 2 groups. 0 means no padding. 1 is the maximum.
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    var histogram = d3.histogram()
    .domain(y.domain())
    .thresholds(y.ticks(20))    // Important: how many bins approx are going to be made? It is the 'resolution' of the violin plot
    .value(d => d)

  