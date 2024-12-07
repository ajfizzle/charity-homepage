import axios from "axios";

export const donate = async (donationData) => {
  try {
    const response = await axios.post("/api/donations/donate", donationData);
    return response.data;
  } catch (error) {
    throw error.response.data.message || "Server error";
  }
};
