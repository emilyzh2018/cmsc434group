// Called when user clicks the "Print something..." button
function showChoices() {
  // Get the form element
  const form = document.getElementById('choicesForm');
  
  // Retrieve the selected radio button for camera1
  const camera1 = form.elements['camera1'].value;
  
  // Retrieve the selected option from the dropdown for camera2
  const camera2 = form.elements['camera2'].value;
  
  // Display the result in the #result div
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `You chose Camera #1: ${camera1} and Camera #2: ${camera2}`;
}
