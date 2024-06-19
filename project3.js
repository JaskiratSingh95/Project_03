// Get the webpage endpoint
const proj3 = "OURLINK/json";

// Fetch the JSON data and console log it
d3.json(proj3).then(function(data) {
  console.log(data);
});