import styled from 'styled-components'
import React from 'react'
const Box =styled.div`
flex: 1;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
position: relative;
`
const Image = styled.img`
width:80%;
`
const Info = styled.h1`
color: white;
font-size: 3rem;
position:absolute;
top:30%`

const Button = styled.button`
width:100px;
height:50px;
position:absolute;
border:none;`
const CatItem = ({item}) => {
  return (
    <>
    <Box>
    <Image src={item.img}></Image>
    <Info>{item.title}</Info>
    <Button>Shop now!</Button>
    </Box>
    </>
  )
}

export default CatItem