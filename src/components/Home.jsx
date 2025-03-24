import React from 'react'
import { useSelector } from 'react-redux';
import "../styles/Home.css";

function Home() {

  const theme = useSelector(state=>state.theme);

  return (
    <div className={`home-panel ${theme}`}>Home</div>

  )
}

export default Home