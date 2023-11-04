import { Stack,Box,Divider} from '@mui/material'
import React from 'react'


const MuiStacknBoxnDivider = () => {
  return (
  <Stack spacing={4} >
      <Stack direction='row' spacing={3}>
        <Box bgcolor='green' height={200} width={200}>
        </Box>
        <Box bgcolor='blue' height={200} width={200}>
        </Box>    
      </Stack>

      <Stack spacing={3} border='1px solid'  divider={<Divider orientation='vertical' flexItem/> }>
      <Box bgcolor='green' height={200} width={200}>
      </Box>    
      <Box bgcolor='blue' height={200} width={200}>
      </Box>    
      </Stack>
  </Stack> 
  )
}

export default MuiStacknBoxnDivider
