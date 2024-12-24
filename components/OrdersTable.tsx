
import React, { useEffect, useState } from "react";
import UpdateOrderButton from "./UpdateFormBtn";
import './styles/table.css';

// Define the Bill type
interface Order {
  quoteId: number;
  startDate: string;
  endDate: string;
  totalAmount: number;
  description: string;
  status: string;
}

const OrdersTable: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch orders from the API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://mesh-1-1.onrender.com/mesh/api/orders", {
          headers: {
            Authorization: `Bearer 2006`, // Include token in headers
          },
        });

        if (response.ok) {
          const data: Order[] = await response.json();
          setOrders(data);
        } else {
          console.error("Failed to fetch orders.");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="table-container">
      <h2>Orders</h2>
      <table className="client-table">
        <thead>
          <tr>
            <th>Quote ID</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Total Amount</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.quoteId}>
              <td>{order.quoteId}</td>
              <td>{order.startDate}</td>
              <td>{order.endDate}</td>
              <td>{order.totalAmount}</td>
              <td>{order.description}</td>
              <td>{order.status}</td>
              <td><UpdateOrderButton 
              orderId={123}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;




// ------------------------------------



  // Fetch orders from the API

