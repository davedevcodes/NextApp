import React from 'react'
import { ThemeProvider, useTheme } from '../context/ThemeContext'
import { useEffect, useState } from 'react';
import ClientNavBar from "@/components/clients/ClientNavBar";
import Footer from "../components/Footer";
import ClientTop from "@/components/clients/ClientTop";
import OrdersTable from '@/components/OrdersTable';
import '../app/globals.css';
import '@/components/styles/Orders.css';

const ClientOrder = () => {

    const [bills, setBills] = useState([]);

    useEffect(() => {
      async function fetchBills() {
        const token = '2006'; // Your Bearer Token
        const response = await fetch('https://mesh-1-1.onrender.com/api/bills', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setBills(data);
      }
      fetchBills();
    }, []);

  return (
    <div>
        <ThemeProvider>
            <ClientNavBar />
            <ClientTop />
            <OrdersTable />
            <Footer />
        </ThemeProvider>
    </div>
  )
}

export default ClientOrder