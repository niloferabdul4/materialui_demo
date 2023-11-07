import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import Slide from '@mui/material/Slide';


// For transition .....

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const MuiDialog = () => {
    const [openDialog,setOpenDialog]=useState(false)
  return (
    <>
     <Button onClick={()=>setOpenDialog(true)} >Show Dialog</Button>
      <Dialog open={openDialog} 
            onClick={()=>setOpenDialog(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            TransitionComponent={Transition}
           // fullScreen (for full screen dialog)

        >
          <DialogContent id="alert-dialog-description">
            <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
           <DialogContentText>Are you sure you want to submit.You will not be able to edit after submitting</DialogContentText>
           {/* <TextField
                            autoFocus                  
                            margin="dense"
                            id="name"
                            label="Email Address"                                   //  For input field  ////
                            type="email"
                            fullWidth
                            variant="standard"
          /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>setOpenDialog(false)}>Submit</Button>
            <Button onClick={()=>setOpenDialog(false)}>Cancel</Button>
          </DialogActions>
      </Dialog>
    </>
  )
}

export default MuiDialog
