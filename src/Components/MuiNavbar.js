import React from 'react'
import { AppBar,Button,IconButton,Stack,Toolbar, Typography } from '@mui/material'
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';
const MuiNavbar = () => {
    const navItems=[{id:1,title:'Home'},
    {id:2,title:'Products'},
    {id:3,title:'Services'},
    {id:4,title:'Login'},]
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
                    {navItems.map(item=>{return <>
                    <Button variant='text' key={item.title} color='inherit'>{item.title}</Button>
                    </>})}
               </Stack>
               
          </Toolbar>
      </AppBar>
    </div>
  )
}

export default MuiNavbar
