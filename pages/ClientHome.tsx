import ClientNavBar from "@/components/clients/ClientNavBar";
import Footer from "../components/Footer";
import ClientTop from "@/components/clients/ClientTop";
import ClientTable from "@/components/clients/ClientTable";
import '../app/globals.css';
import '../components/styles/request.css'
import React from 'react'
import { ThemeProvider } from '../context/ThemeContext'

const ClientHome = () => {
  return (
    <div>
        <ThemeProvider>
            <ClientNavBar />
            <ClientTop />
            <ClientTable />
            <Footer />
        </ThemeProvider>
    </div>
  )
}

export default ClientHome
