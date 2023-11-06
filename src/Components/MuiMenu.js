import React, { useState } from 'react'
import { AppBar,Button,IconButton,Menu,MenuItem,Stack,Toolbar, Typography } from '@mui/material'
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';
const MuiMenu = () => {
   
    const [anchorElement,setAnchorElement]=useState(null)
    const [menuOpen,setMenuOpen]=useState(false)
    const handleMenu=(event)=>{
        setMenuOpen(true)
        //console.log(event.currentTarget)
        setAnchorElement(event.currentTarget)
    }

    const handleClose=()=>{
        setAnchorElement(null)
        setMenuOpen(false)
    }
  return (
    <div>
      <AppBar position='static'>
          <Toolbar sx={{px:'10px'}}>
               <IconButton edge='start' color='inherit' size='large'>
                  <AndroidOutlinedIcon/>
               </IconButton>
               <Typography variant='h5' sx={{flexGrow:1}}>
                    ANDROID
               </Typography>
               <Stack direction='row' spacing={6}>
                  
                    <Button variant='text'   color='inherit' >Home</Button>
                    <Button variant='text'  color='inherit' >Products</Button>
                    <Button variant='text'  color='inherit' >Services</Button>
                    <Button variant='text'  color='inherit' onClick={handleMenu}>UserName</Button>
                 <Menu anchorEl={anchorElement} open={menuOpen}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem> 
                        <MenuItem onClick={handleClose}>Logout</MenuItem> 
                    </Menu>

               </Stack>
               
          </Toolbar>
      </AppBar>
    </div>
  )
}

export default MuiMenu
