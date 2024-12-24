import React from 'react'
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext'
import 'tailwindcss/tailwind.css';
import NavBar from '@/components/navbar';
import Top from '@/components/main/Top';
import '../app/globals.css';
import '../components/styles/Orders.css'
import OrdersTable from '@/components/OrdersTable';

const Orders = () => {

    const [ setOrders] = useState([]);

    useEffect(() => {
      async function fetchOrders() {
        const token = '2006'; // Your Bearer Token
        const response = await fetch('https://mesh-1-1.onrender.com/api/orders', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setOrders(data);
      }
      fetchOrders();
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
