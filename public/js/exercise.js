// Assume you have the Handlebars library included in your project
<script src="https://cdn.jsdelivr.net/npm/handlebars/dist/handlebars.min.js"></script>
// Assume you have the Handlebars library included in your project

// Define the data for the template
var data = {
    workouts: [] // Array to store logged workouts
  };
  
  // Compile the Handlebars template
  var templateSource = document.getElementById("homepage-template").innerHTML;
  var template = Handlebars.compile(templateSource);
  
  // Render the template with the data
  var renderedHtml = template(data);
  
  // Insert the rendered HTML into the DOM
  document.getElementById("output").innerHTML = renderedHtml;
  
