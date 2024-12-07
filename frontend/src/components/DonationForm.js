import React, { useState } from "react";
import { donate } from "../utils/api";

const DonationForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", amount: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await donate(formData);
      setMessage(response.message);
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Donation Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <button type="submit">Donate</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default DonationForm;
