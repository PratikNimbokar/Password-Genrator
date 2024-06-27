document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.querySelector('.input-box input');
    const copyIcon = document.querySelector('.material-symbols-rounded');
    const passLengthRange = document.querySelector('.pass-length input');
    const passLengthSpan = document.querySelector('.pass-length .details span');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
    const generateBtn = document.querySelector('.generate-btn');
  
    // Update the length display when the range input changes
    passLengthRange.addEventListener('input', () => {
      passLengthSpan.textContent = passLengthRange.value;
    });
  
    // Function to generate a random password
    function generatePassword() {
      const length = parseInt(passLengthRange.value);
      const lowercase = 'abcdefghijklmnopqrstuvwxyz';
      const numbers = '0123456789';
      const symbols = '!@$%^&*()_+~`|}{[]:;?><,./-=';
      let characters = '';
      let password = '';
  
      if (lowercaseCheckbox.checked) {
        characters += lowercase;
      }
      if (numbersCheckbox.checked) {
        characters += numbers;
      }
      if (symbolsCheckbox.checked) {
        characters += symbols;
      }
  
      for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }
  
      return password;
    }
  
    // Event listener for generate button
    generateBtn.addEventListener('click', () => {
      const password = generatePassword();
      inputBox.value = password;
    });
  
    // Event listener for copy icon
    copyIcon.addEventListener('click', () => {
      if (inputBox.value) {
        navigator.clipboard.writeText(inputBox.value)
          .then(() => {
            alert('Password copied to clipboard!');
          })
          .catch(err => {
            console.error('Failed to copy text: ', err);
          });
      } else {
        alert('Generate a password first!');
      }
    });
  
    // Initialize the length display
    passLengthSpan.textContent = passLengthRange.value;
  });
  