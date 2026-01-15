// controllers/contactController.js
import ContactMessage from "../models/ContactMessage.js";

export const sendMessage = async (req, res) => {
  try {
    const msg = await ContactMessage.create(req.body);
    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};