'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  // Send HTML response with big font size
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome Page</title>
      <style>
        .welcome-text {
          font-size: 50px; /* Adjust the font size as needed */
          text-align: center; /* Center the text */
          margin-top: 20%; /* Center the text vertically */
          font-family: Arial, sans-serif; /* Optional: Add a font family */
        }
      </style>
    </head>
    <body>
      <div class="welcome-text">Warmly Welcome MSTC appppp</div>
    </body>
    </html>
  `);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
