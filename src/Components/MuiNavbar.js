import React from 'react'
import { AppBar,IconButton,Stack,Toolbar, Typography } from '@mui/material'
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';
const MuiNavbar = () => {
    const navItems=[{id:1,title:'Home'},
    {id:2,title:'Products'},
    {id:3,title:'Services'},
    {id:4,title:'Login'},]
  return (
    <div>
      <AppBar position='static'>
          <Toolbar sx={{padding:'10px'}}>
               <IconButton edge='start' color='inherit' size='large'>
                  <AndroidOutlinedIcon/>
               </IconButton>
               <Typography variant='h5' sx={{flexGrow:1}}>
                    ANDROID
               </Typography>
               <Stack direction='row' spacing={6}>
                    {navItems.map(item=>{return <>
                    <Typography variant='h6' key={item.title}>{item.title}</Typography>
                    </>})}
               </Stack>
               
          </Toolbar>
      </AppBar>
    </div>
  )
}

export default MuiNavbar
