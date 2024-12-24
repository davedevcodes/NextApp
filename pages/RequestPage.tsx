import React from 'react'
import { ThemeProvider, useTheme } from '../context/ThemeContext'
import NavBar from '@/components/navbar';
import Top from '@/components/main/Top';
import Table from '@/components/requests/Table';
import Footer from '@/components/Footer';
import '../app/globals.css';
import '../components/styles/request.css';
import { GetStaticProps } from 'next';

const RequestPage = () => {

  return (
    <ThemeProvider>
          <NavBar />
          <Top />
          <div className="request">
            <Table />
          </div>
          <Footer />
     </ThemeProvider>
  )
}

export default RequestPage