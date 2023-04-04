import React from 'react'
import Header from './header/Header';
import Navbar from './NavBar/Navbar';
import About from './About/About';
import TeamList from './Team/TeamList';
import Footer from './footer/Footer';



function Home() {
  return (
    <>
    <Navbar />
    <Header />

    <About />

    <TeamList />
    

    <Footer />

   
    
    </>
  )
}

export default Home