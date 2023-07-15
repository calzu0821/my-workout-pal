// Assume you have the Handlebars library included in your project

// Compile the Handlebars template
var templateSource = document.getElementById("workout-template").innerHTML;
var template = Handlebars.compile(templateSource);

// Define the data for the template
var data = {
  exerciseTypes: ["Cardio", "Strength Training", "Yoga"],
  loggedWorkouts: []
};

// Render the template with the data
var renderedHtml = template(data);

// Insert the rendered HTML into the DOM
document.getElementById("output").innerHTML = renderedHtml;

// Event handler for the workout form submission
document.getElementById("workout-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  var exerciseType = document.getElementById("exercise-type").value;
  var duration = document.getElementById("duration").value;

  // Perform any necessary validation on the input values

  // Add the logged workout to the data object
  data.loggedWorkouts.push({
    exerciseType: exerciseType,
    duration: duration
  });

  // Re-render the template with the updated data
  var updatedHtml = template(data);

  // Update the DOM with the updated HTML
  document.getElementById("output").innerHTML = updatedHtml;

  // Reset the form
  document.getElementById("workout-form").reset();
});
