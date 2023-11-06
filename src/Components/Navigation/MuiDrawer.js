import { Box, Button, Drawer,IconButton,Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const MuiDrawer = () => {
 const [isDrawerOpen,setIsDrawerOpen]=useState(false)

 const handleClick=()=>{
  setIsDrawerOpen(true)
 }

  return (
    <div>
        
         <IconButton onClick={handleClick} edge='start' size='large' color='inherit' aria-label='logo'>
              <MenuIcon/>
         </IconButton>
        <Drawer anchor='left' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
            <Box width='250px' padding={2} role='presentation' textAlign='center'>
              <Typography variant='h6'>Side Panel</Typography>
            </Box>
         </Drawer>
    </div>
  )
}

export default MuiDrawer
