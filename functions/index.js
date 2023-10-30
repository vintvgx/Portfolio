/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// import * as functions from "firebase-functions";
// import * as nodemailer from "nodemailer";
// import * as express from "express";
// import * as cors from "cors";
const functions = require("@google-cloud/functions-framework");
const nodemailer = require("nodemailer");

// const app = express();

// // Use the cors middleware with the appropriate configuration
// app.use(
//   cors({
//     origin: "https://kareemsaygbe.dev", // Replace with your production URL when deploying
//     methods: "POST", // Allow POST requests
//   })
// );

// Create a Nodemailer transporter with your email service settings
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "kareems0108@gmail.com",
    pass: "ghcd dwbl tqha eypz", // Your App Password here
  },
});

exports.sendEmailv2 = functions.https.onRequest(async (req, res) => {
  const { name, email, message } = req.body;

  // Create the email message
  const mailOptions = {
    from: email,
    to: "your-email@example.com",
    subject: `Contact Form Submission from ${name}`,
    text: message,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});

// functions.http('/sendEmail', async (req, res) => {
//   const { name, email, message } = req.body;

//   // Create the email message
//   const mailOptions = {
//     from: email,
//     to: "kareems0108@gmail.com",
//     subject: `Contact Form Submission from ${name}`,
//     text: message,
//   };

//   try {
//     // Send the email
//     await transporter.sendMail(mailOptions);
//     res.status(200).send("Email sent successfully");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Failed to send email");
//   }
// });

// export const sendEmail = functions.https.onRequest(app);
