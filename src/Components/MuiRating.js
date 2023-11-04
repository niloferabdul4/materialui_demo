import { Rating, Stack } from '@mui/material'
import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
const MuiRating = () => {
    const [count,setCount]=useState(null)
    console.log('value', count)
  return (
    <Stack spacing={5}>        
      <Rating size='large' value={count} onChange={(event)=>setCount(event.target.value)}/>
      <Rating size='large' precision={0.5} value={count} onChange={(event)=>setCount(event.target.value)}/>

      {/******  Add other icons ************/}

      <Rating size='large' 
                value={count} 
                precision={0.5}
                emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>} 
                icon={<FavoriteIcon color='error' fontSize='inherit' />}
                onChange={(event)=>setCount(event.target.value)}
      />
      {/****** Highlight selcted icon only ******/}

       <Rating size='large' 
                value={count} 
                precision={0.5}
                highlightSelectedOnly
                emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>} 
                icon={<FavoriteIcon color='error' fontSize='inherit' />}
                onChange={(event)=>setCount(event.target.value)}
      />
      
    </Stack>
  )
}

export default MuiRating
