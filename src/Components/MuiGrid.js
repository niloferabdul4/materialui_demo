import { Grid, Stack,Box} from '@mui/material'
import React from 'react'
//12 means full width  6 means 1/2 width...
const MuiGrid = () => {
  return (
    <div>
      <Stack spacing={3}>
        <Grid container>
            <Grid item xs={12} sm={6} md={3} m={2}>   
                <Box bgcolor='purple' p={2} >
                     Item1
                </Box>
                
            </Grid>
            <Grid item xs={12} sm={6} md={3} m={2}>
            <Box p={2} bgcolor='green' >
                     Item2
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} m={2}>
                <Box bgcolor='red' p={2} >
                     Item3
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} m={2}>
            <Box bgcolor='yellow' p={2} >
                     Item4
                </Box>
            </Grid>
        </Grid>
      </Stack>
    </div>
  )
}

export default MuiGrid
