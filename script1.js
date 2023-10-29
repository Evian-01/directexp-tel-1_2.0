fetch('https://api64.ipify.org?format=json')
.then(response => response.json())
.then(data => {
    const ipAddressInput = document.getElementById('ip-address');
    if (ipAddressInput) {
        ipAddressInput.value = data.ip;
    }
})
.catch(error => console.error('Error fetching IP address:', error));