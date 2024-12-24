import React from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import NavBar from '@/components/navbar'
import Top from '@/components/main/Top';
import BillsTable from '@/components/BillsTable';
import '../components/styles/bills.css'

const Bills = () => {
  return (
    <ThemeProvider>
        <NavBar />
        <Top />
        <BillsTable />
    </ThemeProvider>
  )
}

export default Bills