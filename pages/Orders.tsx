import React from 'react'
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext'
import 'tailwindcss/tailwind.css';
import NavBar from '@/components/navbar';
import Top from '@/components/main/Top';
import '../app/globals.css';
import '../components/styles/Orders.css'
import OrdersTable from '@/components/OrdersTable';
import UpdateOrderButton from '@/components/UpdateFormBtn';

const Orders = () => {

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
            <NavBar />
            <Top />
            <OrdersTable />


        </ThemeProvider>
    </div>
  )
}

export default Orders