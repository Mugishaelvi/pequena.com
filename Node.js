const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

const accountSid = 'ACc49996d9069db28fb2a438f8b000e8dd';
const authToken = 'e22fad555fe8d35ea8ad5a0d886b2ace';
const client = twilio(accountSid, authToken);

app.use(bodyParser.json());

app.post('/send-sms', (req, res) => {
    const { phone, message } = req.body;

    client.messages
        .create({
            body: message,
            from: '+25767301044', // Votre numéro Twilio
            to: phone,
        })
        .then(() => res.status(200).send('Message sent!'))
        .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});