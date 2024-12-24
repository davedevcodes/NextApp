import React, { useEffect, useState } from "react";
import '../app/globals.css'
import './styles/table.css';

// Define the Bill type
interface Bill {
  orderId: number;
  amount: number;
  dueDate: string;
  description: string;
  status: string;
}

const BillsTable: React.FC = () => {
  const [bills, setBills] = useState<Bill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch bills from the API
  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await fetch("https://mesh-1-1.onrender.com/mesh/api/bills", {
          headers: {
            Authorization: `Bearer 2006`, // Include token in headers
          },
        });

        if (response.ok) {
          const data: Bill[] = await response.json();
          setBills(data);
        } else {
          setError("Failed to fetch bills.");
        }
      } catch (error) {
        setError("Error fetching bills.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="table-container">
      <h2>Bills</h2>
      <table className="client-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.orderId}>
              <td>{bill.orderId}</td>
              <td>{bill.dueDate}</td>
              <td>{bill.amount}</td>
              <td>{bill.description}</td>
              <td>{bill.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillsTable;
