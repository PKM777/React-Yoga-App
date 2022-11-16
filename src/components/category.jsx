import pexelstwo from '../media/pexelstwo.jpg'
import React from 'react'
import styled from 'styled-components'
import { catgs } from '../data'
import CatItem from './catitem'

const Container = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${pexelstwo});
background-size: cover;
display: flex;
justify-content: space-evenly;
`
const Category = () => {
  return (
    <Container>
        {
            catgs.map((item)=>(
            <CatItem item={item}></CatItem>
        ))
        }
    </Container>
  )
}

export default Category