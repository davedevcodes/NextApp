import React from 'react'
import NavBar from "../components/navbar";
import Main from "../components/main/Main";
import Footer from "../components/Footer";
import '../app/globals.css';
import '../components/styles/home.css';
import { ThemeProvider } from '@/context/ThemeContext';

const Home = () => {
  return (
    <ThemeProvider>
        <NavBar />
        <Main />
        <Footer />
    </ThemeProvider>
  )
}

export default Home