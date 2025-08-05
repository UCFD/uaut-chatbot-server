const fetch = require('node-fetch');

fetch('http://localhost:3000/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [
      { role: 'user', content: 'What courses does UAUT offer?' }
    ]
  }),
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
