const API_URL = "http://127.0.0.1:5000";

export const signup = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error signing up:", error);
  }
};