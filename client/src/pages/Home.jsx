import React from 'react'
import Cards from '../HomeSections/Cards'
import Hero from '../HomeSections/Hero'
import {Helmet} from "react-helmet";
import Bitcoin from '../HomeSections/Bitcoin';
import Cards2 from '../HomeSections/Cards2';
import Currency from '../HomeSections/Currency';
import News from '../HomeSections/News';


function Home() {
  return (
   <>
   <Helmet>
    <title>
      Invest
    </title>
   </Helmet>
   <Hero/>
   <Bitcoin/>
   <Cards2/>
   <Currency/>
  <News/>
   <Cards/>
   </>
  )
}

export default Home