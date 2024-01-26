// const express = require('express');
// const bodyParser = require('body-parser');
// const { google } = require('googleapis');
// const axios = require('axios');
// const { type } = require('@testing-library/user-event/dist/type');
// require('dotenv').config(); // Load environment variables from .env file

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(bodyParser.json());

// // Google Sheets API credentials
// const credentials = {
//   type: process.env.type,
//   project_id: process.env.project_id,
//   private_key_id: process.env.private_key_id,
//   private_key: process.env.private_key,
//   client_email: process.env.client_email,
//   client_id: process.env.client_id,
//   auth_uri: process.env.auth_uri,
//   token_uri: process.env.token_uri,
//   auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
//   client_x509_cert_url: process.env.client_x509_cert_url,
// };

// const oAuth2Client = new google.auth.OAuth2(
//   credentials.client_id,
//   credentials.private_key
// );

// // Scopes for Google Sheets API
// const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];



// // Server start
// app.post('/submit-form', async (req, res) => {
//   const { email, time } = req.body;

//   try {
//     // Authorize the client with credentials and obtain a token
//     const token = await authorize();
//     oAuth2Client.setCredentials(token);

//     // Add data to Google Sheets
//     await addToGoogleSheet({ email, time });

//     res.status(200).json({ message: 'Form submitted successfully' });
//   } catch (error) {
//     console.error('Error submitting form:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Function to authorize the client with Google Sheets API
// const authorize = async () => {
//   try {
//     const token = {}; // Implement logic to retrieve or refresh the token
//     return token;
//   } catch (error) {
//     console.error('Authorization error:', error.message);
//     throw error;
//   }
// };

// // Function to add data to Google Sheets
// const addToGoogleSheet = async ({ email, time }) => {
//   try {
//     // Authorize the client with credentials and obtain a token
//     const token = await authorize();
//     oAuth2Client.setCredentials(token);

//     // Set up the Google Sheets API
//     const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });

//     // Set your spreadsheetId and range
//     const spreadsheetId = process.env.spreadsheetId;
//     const range = 'Sheet1';

//     // Data to be added
//     const values = [[email, time]];

//     // Append data to Google Sheets
//     await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range,
//       valueInputOption: 'USER_ENTERED',
//       resource: { values },
//     });

//     console.log('Data added to Google Sheets successfully');
//   } catch (error) {
//     console.error('Error adding data to Google Sheets:', error.message);
//     throw error;
//   }
// };

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
//   console.log(process.env.spreadsheetId);
//   console.log(type)
// });
