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
    response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function login({ email, password }) {
  try {
    const response = await api.post("/api/auth/login", { email, password });
    response.data;
  } catch (err) {
    console.log(err);
  }
}
export async function logout() {
  try {
    const response = await axios.get("/api/auth/logout");
    response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getMe() {
  try {
    const response = await axios.get("/api/auth/me");
    response.data;
  } catch (err) {
    console.log(err);
  }
}
