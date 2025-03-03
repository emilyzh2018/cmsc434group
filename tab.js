function showChoices() {
  const form = document.getElementById('choicesForm');
  
  const camera1 = form.elements['camera1'].value;
  
  const camera2 = form.elements['camera2'].value;
  
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `You chose Camera #1: ${camera1} and Camera #2: ${camera2}`;
}

