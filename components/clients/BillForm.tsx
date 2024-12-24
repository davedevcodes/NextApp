import { useState } from 'react';
import axios from 'axios';
import { FaFileInvoice } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import '../styles/billform.css'

const BillForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    orderId: '',
    amount: '',
    dueDate: '',
    description: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  // Toggle modal visibility
  const toggleModal = () => setModalOpen(!isModalOpen);

  // Handle form input changes
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
      const response = await axios.post(
        'https://mesh-1-1.onrender.com/mesh/api/bills',
        formData,
        {
          headers: {
            Authorization: `Bearer 2006`,
          },
        }
      );
      setStatusMessage('Bill created successfully!');
      setFormData({
        orderId: '',
        amount: '',
        dueDate: '',
        description: '',
      });
    } catch (error) {
      setStatusMessage('Failed to create bill.');
      console.error(error);
    }
  };

  return (
    <div>
      <button className="set" onClick={toggleModal}>
        <FaFileInvoice className="icon" />
        <span>Create bill</span>
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 className='head'>Create a Bill</h2>
            <form onSubmit={handleSubmit} className="bill-form">
              <div>
                <label htmlFor="orderId" className='Label'>Order ID</label>
                <input
                  className='input'
                  type="number"
                  id="orderId"
                  name="orderId"
                  value={formData.orderId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="amount" className='Label'>Amount</label>
                <input
                className='input'
                  type="number"
                  id="amount"
                  name="amount"
                  step="0.01"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="dueDate" className='Label'>Due Date</label>
                <input
                className='input'
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className='Label'>Description</label>
                <textarea
                className='input'
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit Bill
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

export default BillForm;
