const express = require('express');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');
app.use(
    auth({
      issuerBaseURL: 'http://192.168.23.129:8080/realms/master',
      audience: 'api'
    })
);

app.get('/api/messages',
    (req, res, next) => {
      const auth = req.auth;
      auth.header; // The decoded JWT header.
      auth.payload;  // The decoded JWT payload.
      auth.token; // The raw JWT token.
      res.send('success')
    }
);

app.listen(process.env.PORT || 4000, function() {
    console.log('server running on port 4000', '');
});