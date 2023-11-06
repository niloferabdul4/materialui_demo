import { Stack,Box,Divider, Paper, Typography} from '@mui/material'
import React from 'react'


// to  increase the shadow, add elevation prop with big value
const MuiPaper = () => {
  return (
    <Paper sx={{padding:'30px'}} elevation={6} >
  <Stack spacing={4} >
      <Stack direction='row' spacing={3}>
        <Box bgcolor='green' height={200} width={200}>
        </Box>
        <Box bgcolor='blue' height={200} width={200}>
        </Box>    
      </Stack>

      <Stack direction='row' spacing={3} divider={<Divider orientation='vertical' flexItem/> }>
            <Typography variant='subtitle1' >Javascript</Typography>
            <Typography variant='subtitle1' >React</Typography>
            <Typography variant='subtitle1' >CSS</Typography>
            <Typography variant='subtitle1' >HTML</Typography>          
      </Stack>
  </Stack> 
  </Paper>
  )
}

export default MuiPaper
