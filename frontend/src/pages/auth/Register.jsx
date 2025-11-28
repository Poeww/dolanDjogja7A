import { useState } from "react";
import authApi from "../../api/authApi";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await authApi.register(form);
      alert("Registrasi berhasil! Silakan login.");
      window.location.href = "/login";
    } catch (error) {
      alert("Register gagal! Periksa kembali data Anda.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Nama Lengkap</label><br />
          <input
            type="text"
            name="name"
            placeholder="Nama lengkap"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Password</label><br />
          <input
            type="password"
            name="password"
            placeholder="Password (min 6 karakter)"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Nomor HP</label><br />
          <input
            type="text"
            name="phone"
            placeholder="Opsional"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Pilih Role</label><br />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="guide">Guide</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <br />

        <button type="submit">Register</button>
      </form>

      <p>
        Sudah punya akun? <a href="/login">Login</a>
      </p>
    </div>
  );
}