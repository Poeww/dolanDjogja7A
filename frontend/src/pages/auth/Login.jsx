import { useState } from "react";
import authApi from "../../api/authApi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await authApi.login({
        email: email,
        password: password,
      });

      const token = response.data.token;
      const user = response.data.user;

      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);

      // Redirect sesuai role
      if (user.role === "admin") {
        window.location.href = "/admin/dashboard";
      } else if (user.role === "guide") {
        window.location.href = "/guide/dashboard";
      } else {
        window.location.href = "/user/dashboard";
      }
    } catch (error) {
      alert("Login gagal! Periksa email dan password.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label> <br />
          <input
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Password</label> <br />
          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>

      <p>
        Belum punya akun? <a href="/register">Daftar</a>
      </p>
    </div>
  );
}