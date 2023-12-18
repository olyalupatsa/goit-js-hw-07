const nameInput = document.getElementById('name-input');

const nameOutput = document.getElementById('name-output');

function updateNameOutput() {
    
    const trimmedValue = nameInput.value.trim();

    if (trimmedValue === '') {
      nameOutput.textContent = 'Anonymous';
    } else {
      nameOutput.textContent = trimmedValue;
    }
}
  
nameInput.addEventListener('input', updateNameOutput);