import { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import '../styles/quoteform.css';

const QuoteForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    clientId: '',
    propertyDetails: '',
    additionalNotes: '',
    description: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  // Toggle the modal visibility
  const toggleModal = () => setModalOpen(!isModalOpen);

  // Handle form data change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit the form data to the API
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        'https://mesh-1-1.onrender.com/mesh/api/quotes',
        formData,
        {
          headers: {
            Authorization: `Bearer 2006`,
          },
        }
      );
      setStatusMessage('Quote created successfully!');
      setFormData({
        clientId: '',
        propertyDetails: '',
        additionalNotes: '',
        description: '',
      });
    } catch (error) {
      setStatusMessage('Failed to create quote.');
      console.error(error);
    }
  };

  return (
    <div>
      <button className="set" onClick={toggleModal}>
        <h2>
          <FaPaperPlane />
        </h2>
        <span>Make Request</span>
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create a Quote</h2>
            <form onSubmit={handleSubmit} className="quote-form">
              <div>
                <label htmlFor="clientId" className="Label">Client ID</label>
                <input
                  type="number"
                  id="clientId"
                  name="clientId"
                  value={formData.clientId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="propertyDetails" className="Label">Property Details</label>
                <textarea
                  id="propertyDetails"
                  name="propertyDetails"
                  value={formData.propertyDetails}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="additionalNotes" className="Label">Additional Notes</label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="description" className="Label">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit Quote
              </button>
            </form>
            {statusMessage && <p>{statusMessage}</p>}
            <button className="close-btn" onClick={toggleModal}>
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteForm;
