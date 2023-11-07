import { Snackbar, Button, Alert } from '@mui/material'
import React, { useState } from 'react'

const MuiSnackbar = () => {
    const [openSnackbar,setOpenSnackbar]=useState(false)
    const handleClose=()=>
    {       
            setOpenSnackbar(false)
    }
  return (
    <div>
         {/* 
          <Button variant='contained' onClick={()=>setOpenSnackbar(true)}>Submit</Button>
             <Snackbar open={openSnackbar}
                        message='Form Submitted' 
                        autoHideDuration={4000}  
                        onClose={handleClose}
                        anchorOrigin={{vertical:'bottom',horizontal:'center'}}/>     {/****** To place in the bottom-center ****
         
         */}
            {/****Adding alert box  ******/}


            <Button variant='contained' onClick={()=>setOpenSnackbar(true)}>Submit</Button>
             <Snackbar open={openSnackbar}  autoHideDuration={4000}  anchorOrigin={{vertical:'bottom',horizontal:'center'}}>                     
                      <Alert severity='success' variant='filled' onClose={handleClose} >Form submitted</Alert>
            </Snackbar>
       
    </div>
  )
}

export default MuiSnackbar
