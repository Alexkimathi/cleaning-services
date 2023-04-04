import React from 'react'
import Header from './header/Header';
import Navbar from './NavBar/Navbar';
import About from './About/About';
import TeamList from './Team/TeamList';



function Home() {
  return (
    <>
    <Navbar />
    <Header />

    <About />

    <TeamList />
    

   
    
    </>
  )
}

export default Home