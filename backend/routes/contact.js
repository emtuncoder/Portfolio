// backend/routes/contact.js
import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(200).json({ message: "Message received!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong." });
  }
   try {
    const auth = await authenticateGmail();
    await sendThankYouEmail(auth, email, name);
    res.status(200).json({ message: "Message received and thank-you email sent." });
  } catch (err) {
    console.error("Email error:", err.message);
    res.status(500).json({ error: "Failed to send thank-you email" });
  }
});

export default router;
