import React from 'react'
import { productItems } from '../data'
import styled from 'styled-components'
import Product from './product'
import pexelsone from '../media/pexelsone.jpg'


const Container = styled.div`
width: 100vw;
display: flex;
justify-content: space-evenly;
background-image: url(${pexelsone});
background-size: cover;
background-position: bottom;
background-color: black;
background-blend-mode: luminosity;
flex-wrap: wrap;
`
const Products = () => {
  return (
    <Container>
        {
            productItems.map((item)=>(
                <Product item={item} key={item.id}/>
            ))

        }
    </Container>
  )
}

export default Products