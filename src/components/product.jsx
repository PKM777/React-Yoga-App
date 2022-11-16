import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Sub = styled.div`
display: flex;
opacity: 0;
justify-content: center;
align-items: center;
border-radius: 50%;
width:50px;
height:50px;
background-color:black;
z-index: 2;
transition:all 0.1s ease;
&:hover{
    transform: scale(1.1);
}`

const Image = styled.img`
width: 60%;
margin: 2%;
transition:all 0.6s ease;
`

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 25%;
position: relative;


&:hover ${Image}{
    opacity: 0.9;
}

&:hover ${Sub}{
    opacity: 1;
}
`
const Iconbox = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
color: white;
width:60%;
height:30%;
position:absolute;

`









const Product = ({item}) => {
  return (
    <>
    <Box>
        <Image src={item.img}></Image>
        <Iconbox>
        <Sub>
        <FavoriteIcon/>
        </Sub>
        <Sub>
        <SearchIcon/>
        </Sub>
        <Sub>
        <ShoppingCartIcon/>
        </Sub>
        </Iconbox>
    </Box>
    </>
  )
}

export default Product