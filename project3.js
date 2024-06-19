// Get the webpage endpoint
const proj3 = "OURLINK";

// Fetch the JSON data and console log it
d3.json(proj3).then(function(data) {
  console.log(data);
});

// flask route is in the json instead of the url here 
//(eg. forward/data) --> will run this route 