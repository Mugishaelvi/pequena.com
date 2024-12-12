document.getElementById('messageForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const responseDiv = document.getElementById('response');

    try {
        // Envoyer le message via une API (exemple avec fetch)
        const response = await fetch('https://api.example.com/send-sms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone, message }),
        });

        if (response.ok) {
            responseDiv.textContent = "Message envoyé avec succès !";
            responseDiv.style.color = "green";
        } else {
            responseDiv.textContent = "Échec de l'envoi du message.";
            responseDiv.style.color = "red";
        }
    } catch (error) {
        responseDiv.textContent = "Une erreur s'est produite.";
        responseDiv.style.color = "red";
    }
});