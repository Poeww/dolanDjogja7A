import authApi from "./authApi";

export default async function logout() {
  try {
    await authApi.logout();
  } catch (error) {
    console.log("Logout error:", error);
  }

  localStorage.removeItem("token");
  localStorage.removeItem("role");

  window.location.href = "/login";
}
