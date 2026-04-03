import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export async function register({ email, password, username }) {
  try {
    const response = await api.post("/api/auth/register", {
      email,
      password,
      username,
    });
    return response.data; // ✅ FIX
  } catch (err) {
    console.log(err);
    throw err; // ✅ optional but better
  }
}

export async function login({ email, password }) {
  try {
    const response = await api.post("/api/auth/login", { email, password });
    return response.data; // ✅ FIX
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function logout() {
  try {
    const response = await api.get("/api/auth/logout"); // ✅ use api
    return response.data; // ✅ FIX
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getMe() {
  try {
    const response = await api.get("/api/auth/me"); // ✅ use api
    return response.data; // ✅ FIX
  } catch (err) {
    console.log(err);
    throw err;
  }
}
