const Donation = require("../models/Donation");

const createDonation = async (req, res) => {
  const { name, email, amount } = req.body;

  if (!name || !email || !amount) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const donation = new Donation({ name, email, amount });
    await donation.save();
    res.status(201).json({ message: "Donation successful", donation });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { createDonation };
