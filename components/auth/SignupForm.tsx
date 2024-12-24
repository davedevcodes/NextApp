"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    role: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const response = await fetch("https://mesh-1-1.onrender.com/mesh/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 2006", // Include the token here
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name, // Include name if required
          role: formData.role, // Send user type (client or contractor) if expected
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful:", data);

        // Redirect to appropriate home page
        const homePage = formData.role === "client" ? "/ClientHome" : "/Home";
        router.push(homePage);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Signup failed. Please check your input.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="glass-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
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
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="client">Client</option>
          <option value="contractor">Contractor</option>
        </select>
        <button type="submit">Sign Up</button>
        {error && <p className="error">{error}</p>}
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
