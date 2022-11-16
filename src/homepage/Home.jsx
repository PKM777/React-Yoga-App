import React from 'react'

import Navbar from '../components/Navbar'
import Category from '../components/category'
import Slider from '../components/Slider'
import Products from '../components/products'



const Home = () => {
  return (
    <>
        <Navbar/>
        <Slider/>
        <Category/>
        <Products/>
    </>
  )
}

export default Home