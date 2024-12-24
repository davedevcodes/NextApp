// components/UpdateOrderForm.tsx
"use client";

import React, { useState } from "react";

interface UpdateOrderFormProps {
  orderId: number; // ID of the order to update
  onClose: () => void; // Function to close the form
  onSuccess: () => void; // Callback to trigger on successful update
}

const UpdateOrderForm: React.FC<UpdateOrderFormProps> = ({ orderId, onClose, onSuccess }) => {
  const [status, setStatus] = useState("completed");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`https://mesh-1-1.onrender.com/mesh/api/mesh/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 2006`, // Ideally, move this token to environment variables
        },
        body: JSON.stringify({
          status,
          description,
        }),
      });

      if (response.ok) {
        alert("Order updated successfully!");
        onSuccess();
        onClose();
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to update order.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="update-order-overlay">
      <div className="update-order-modal">
        <h2 className="update-order-title">Update Order #{orderId}</h2>
        <form onSubmit={handleUpdate} className="update-order-form">
          <div className="form-group">
            <label className="form-label">Status</label>
            <select
              className="form-input"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="completed">Completed</option>
              <option value="in_progress">In Progress</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-input"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter order update description"
              required
            />
          </div>
          {error && <p className="form-error">{error}</p>}
          <div className="form-actions">
            <button
              type="button"
              className="btn btn-cancel"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-submit"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateOrderForm;
