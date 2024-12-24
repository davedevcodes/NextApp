import React from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import ClientTop from '@/components/clients/ClientTop'
import ClientNavBar from '@/components/clients/ClientNavBar'
import BillsTable from '@/components/BillsTable';
import '../components/styles/bills.css'

const Bills = () => {
  return (
    <ThemeProvider>
        <ClientNavBar />
        <ClientTop />
        <BillsTable />
    </ThemeProvider>
  )
}

export default Bills