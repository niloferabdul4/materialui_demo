import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

const MuiLink = () => {
  return (
 
      <Stack direction='row' spacing={10} p={4}>
        <Link href='#' underline='none' variant='h5' >Primary No underline</Link>
        <Link href='#' color='secondary' variant='h5' >Secondary</Link>
        <Link href='#' color='error' variant='h5' onClick={()=>alert('Iam a button')} component='button' >Button Link</Link>
        <Typography variant='h4' >
            <Link href='#' underline='hover' >Underline On hover</Link>            
        </Typography>       
        </Stack> 
  )
}

export default MuiLink
