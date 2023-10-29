import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import * as express from "express";
import * as cors from "cors";

const app = express();

// Use the cors middleware with the appropriate configuration
app.use(
  cors({
    origin: "https://kareemsaygbe.dev", // Replace with your production URL when deploying
    methods: "POST", // Allow POST requests
  })
);

// Create a Nodemailer transporter with your email service settings
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "kareems0108@gmail.com",
    pass: "ghcd dwbl tqha eypz", // Your App Password here
  },
});

app.post("/sendEmail", async (req, res) => {
  const { name, email, message } = req.body;

  // Create the email message
  const mailOptions = {
    from: email,
    to: "kareems0108@gmail.com",
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

export const sendEmail = functions.https.onRequest(app);
