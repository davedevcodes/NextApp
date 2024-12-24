import React from 'react';
import '../styles/ClientTop.css';
import { FaPaperPlane } from 'react-icons/fa';
import BillForm from './BillForm';
import QuoteForm from './QuoteForm';

const ClientTop = () => {
  return (
    <div>
      <div className='top'>
        <h1 className="greeting">
          Welcome, John
        </h1>
        <div className="topRight">
          <BillForm />
          <QuoteForm />
        </div>
    </div>
    </div>
  )
}

export default ClientTop