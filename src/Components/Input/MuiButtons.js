
// VARIANT, SIZE, COLOR, ICON IN BUTTON, ICONBUTTON,ButtonGroup
import React, { useState } from 'react';
import { Button, ButtonGroup, IconButton, Stack,ToggleButton,ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';



const MuiButtons = () => {
 

  return (
    <div>
      <Stack direction='column' spacing={4}>            
          <Stack direction='row'  spacing={3}>
              <Button variant='text'>Text</Button>
              <Button variant='outlined'>Outlined</Button>
              <Button variant='contained'>Contained</Button>
          </Stack>

      {/****  Size and Color   ****/}
      
          <Stack direction='row'  spacing={3}>
              <Button variant='contained' color='secondary'>Secondary</Button>
              <Button variant='contained' color='error'> Error</Button>
              <Button variant='contained' color='success'>Success</Button>

              <Button variant='contained' size='small'>Small</Button>
              <Button variant='contained' size='medium'> Medium</Button>
              <Button variant='contained' size='large'>Large</Button>
          </Stack>

      {/******  Icon IN BUTTON  &&  ICONBUTTON   *****/}

           <Stack direction='row' spacing={3}>
              <Button variant='contained' startIcon={<SendIcon/>} disableElevation >Send</Button>
              <Button variant='contained' endIcon={<DeleteIcon/>} disableRipple>Delete</Button>
           </Stack>
           <Stack direction='row'  spacing={3}>
              <IconButton color='success'>
                  <SendIcon/>
              </IconButton>
              <IconButton color='error'>
                  <DeleteIcon/>
              </IconButton>
           </Stack>


           {/*******  BUTTON GROUP (add orientation='vertical' for vertical buttons) ***********/}

           <Stack direction='row' spacing={4}>
               <ButtonGroup variant='contained' aria-label='alignment button group'>
                <Button  color='secondary'>Secondary</Button>
                <Button color='error'> Error</Button>
                <Button  color='success'>Success</Button>
               </ButtonGroup>

               <ButtonGroup variant='text'>
                <Button  color='secondary'>Secondary</Button>
                <Button color='error'> Error</Button>
                <Button  color='success'>Success</Button>
               </ButtonGroup>
           </Stack>

      </Stack>
    </div>
  )
}

export default MuiButtons

//Elevation & Ripple - while hovering and clicking the button