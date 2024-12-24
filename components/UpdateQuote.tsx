import { useState } from 'react';
import axios from 'axios';
import '../components/styles/updatequote.css';

// Define the type of props for the component
interface UpdateQuoteFormProps {
  quoteId: number; // Explicitly type 'quoteId' as a number
}

const UpdateQuoteForm: React.FC<UpdateQuoteFormProps> = ({ quoteId }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    status: '',
    propertyDetails: '',
    additionalNotes: '',
    description: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  // Toggle modal visibility
  const toggleModal = () => setModalOpen(!isModalOpen);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit the form data to the API
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data being sent:', formData); // Debug log

    try {
      const response = await axios.put(
        `https://mesh-1-1.onrender.com/mesh/api/mesh/quotes/${quoteId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer 2006`, // Consider storing this token in an environment variable
          },
        }
      );

      console.log('Response:', response); // Debug log
      setStatusMessage('Quote updated successfully!');
      setFormData({ status: '', propertyDetails: '', additionalNotes: '', description: '' });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error during API call:', error.response?.data || error.message);
      } else if (error instanceof Error) {
        console.error('Unexpected error during API call:', error.message);
      } else {
        console.error('Unknown error during API call:', error);
      }
      setStatusMessage('Failed to update the quote.');
    }
  };

  return (
    <div>
      <button onClick={toggleModal} aria-expanded={isModalOpen}>
        View
      </button>
      {isModalOpen && (
        <div className="modal" role="dialog" aria-labelledby="update-quote-title" aria-hidden={!isModalOpen}>
          <div className="modal-content">
            <h2 id="update-quote-title">Update Quote</h2>
            <form onSubmit={handleSubmit} className="update-quote-form">
              <div>
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  placeholder="e.g., accepted"
                  required
                />
              </div>
              <div>
                <label htmlFor="propertyDetails">Property Details</label>
                <textarea
                  id="propertyDetails"
                  name="propertyDetails"
                  value={formData.propertyDetails}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="additionalNotes">Additional Notes</label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit Update
              </button>
            </form>
            {statusMessage && <p>{statusMessage}</p>}
            <button className="close-btn" onClick={toggleModal} aria-label="Close modal">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateQuoteForm;
