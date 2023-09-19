const twilio = require('twilio');

// Twilio Account SID and Auth Token
const accountSid = 'accoundsid'; //Place your Account SID
const authToken = 'authtoken'; // Place your Auth Token

// Create a Twilio client
const client = twilio(accountSid, authToken);

// Make a phone call
function call(){
  client.calls.create({
    url: 'http://demo.twilio.com/docs/voice.xml', // A TwiML URL for the call
    to: '+9999999999', // Recipient's phone number
    from: '+9999999999', // Twilio phone number
  })
  .then(call => console.log(call.sid))
  .catch(error => console.error(error));
};

// Add the timeout to schedule the call
setTimeout(() => {
  call();
}, 120000);

