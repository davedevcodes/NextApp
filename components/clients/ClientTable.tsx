"use client";

import React, { useState } from "react";
import '../styles/table.css';
import UpdateQuoteForm from "../UpdateQuote";
import axios from "axios";

interface Quote {
  clientId: number;
  propertyDetails: string;
  additionalNotes: string;
  description: string;
  status: string;
}

const ClientTable = () => {
  const [clientId, setClientId] = useState<string>(""); // Input for client ID
  const [quotes, setQuotes] = useState<Quote[]>([]); // State for quotes
  const [errorMessage, setErrorMessage] = useState<string>(""); // Error message

  const handleFetchQuotes = async () => {
    if (!clientId) {
      setErrorMessage("Please enter a valid Client ID.");
      return;
    }

    try {
      const response = await axios.get(
        `https://mesh-1-1.onrender.com/mesh/api/quotes/{id}`,
        {
          headers: {
            Authorization: `Bearer 2006`,
          },
        }
      );
      setQuotes(response.data); // Update the quotes state with fetched data
      setErrorMessage(""); // Clear any previous error message
    } catch (error) {
      setErrorMessage("Failed to fetch quotes. Please check the Client ID.");
      console.error("Error fetching quotes:", error);
    }
  };

  return (
    <div className="table-container">
      <h2>Quotes</h2>
      
      {/* Input for Client ID */}
      <div className="fetch-section">
        <input
          type="text"
          placeholder="Enter Client ID"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className="client-id-input"
        />
        <button onClick={handleFetchQuotes} className="fetch-btn">
          Fetch Quotes
        </button>
      </div>

      {/* Error Message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Table to display quotes */}
      <table className="client-table">
        <thead>
          <tr>
            <th>Client ID</th>
            <th>Property Details</th>
            <th>Additional Notes</th>
            <th>Description</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {quotes.length > 0 ? (
            quotes.map((quote) => (
              <tr key={quote.clientId}>
                <td>{quote.clientId}</td>
                <td>{quote.propertyDetails}</td>
                <td>{quote.additionalNotes}</td>
                <td>{quote.description}</td>
                <td>{quote.status}</td>
                <td className="viewLink">
                  <UpdateQuoteForm quoteId={quote.clientId} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No quotes found for this Client ID.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
