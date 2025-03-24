import React from 'react'
import { useSelector } from 'react-redux';
import "../styles/Home.css";

function Home() {

  const theme = useSelector(state=>state.theme);

  return (
    <div className={`home-panel ${theme}`}>Home Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos impedit deserunt esse soluta quia tenetur voluptatem tempora, inventore eligendi fugiat. Veniam neque excepturi quo sit tempore itaque saepe id illum a rem voluptate doloribus, quas harum et officia hic earum quaerat nemo magni distinctio incidunt eaque sunt at eius? Velit est reiciendis possimus officia hic! Quos recusandae beatae laboriosam ipsa maiores sequi amet quas, debitis est magni eveniet mollitia iste voluptas dolor odio dolore pariatur libero. Commodi expedita illum adipisci quod culpa minima nobis unde accusamus, tempore pariatur ex, repudiandae minus enim autem excepturi odio possimus vel consectetur? Beatae ipsam eaque odio delectus debitis amet illo neque, illum fuga aperiam, earum eos odit impedit aliquam nesciunt dolor omnis deleniti minus vel itaque dolorem molestias? Temporibus dolorum ducimus saepe laborum totam.</div>

  )
}

export default Home