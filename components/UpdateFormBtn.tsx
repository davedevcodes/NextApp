"use client";

import React, { useState } from "react";
import UpdateOrderForm from "./OrderForm";

interface UpdateOrderButtonProps {
  orderId: number; // The ID of the order to update
}

// interface UpdateOrderButtonProps {
//     orderId?: number; // Make it optional with "?"
// }
  

const UpdateOrderButton: React.FC<UpdateOrderButtonProps> = ({ orderId }) => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleUpdateSuccess = () => {
    console.log("Order updated successfully!");
    setShowForm(false);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleOpenForm}
      >
        Update Order
      </button>

      {showForm && (
        <UpdateOrderForm
          orderId={orderId}
          onClose={handleCloseForm}
          onSuccess={handleUpdateSuccess}
        />
      )}
    </div>
  );
};

export default UpdateOrderButton;
