"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "client", // Default role
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://mesh-1-1.onrender.com/mesh/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer 2006`, // Add the token here
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);

        // Store token (optional, depending on API behavior)
        localStorage.setItem("authToken", data.token);

        // Redirect based on the selected role
        if (formData.role === "contractor") {
          router.push("/Home"); // Redirect to contractor homepage
        } else {
          router.push("/ClientHome"); // Redirect to client homepage
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Invalid login credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="glass-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <div className="role-selection">
          <label htmlFor="role">Select Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="client">Client</option>
            <option value="contractor">Contractor</option>
          </select>
        </div>

        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
        <p>
          Don&apos;t have an account? <Link href="/Signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
