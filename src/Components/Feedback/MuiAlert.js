import { Alert, AlertTitle, Button, Stack } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

const MuiAlert = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={5}>    
            <Alert severity='error'> This is an error message </Alert>
            <Alert severity='success'>This is success message</Alert>
            <Alert severity='warning'>This is a warning message</Alert>
            <Alert severity='info'>This is info </Alert>
        </Stack>

{/*****  Variant  & AlertTitle *********/}

        <Stack spacing={5}>    
            <Alert severity='error' variant='filled'> 
               <AlertTitle>Error</AlertTitle>
               This is an error message                
           </Alert>
            <Alert severity='success' variant='filled' >This is success message</Alert>
            <Alert severity='warning' variant='outlined'>This is a warning message</Alert>
            <Alert severity='info'>This is info </Alert>
        </Stack>

{/********** Add Close ,Icon and Button  ************/}

        <Stack spacing={5}>    
            <Alert severity='error' variant='filled' onClose={()=>alert('closed')}> This is an error message </Alert>
            <Alert severity='success' variant='filled' icon={<CheckIcon/>} >This is success message</Alert>
            <Alert severity='warning' variant='outlined' >This is a warning message</Alert>
            <Alert severity='secondary' variant='filled' action={<Button color='inherit'>Undo</Button>}>This is info </Alert>
        </Stack>
    </Stack>
  )
}

export default MuiAlert
