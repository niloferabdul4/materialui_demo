import React, { useState } from 'react'
import { Box, MenuItem, TextField } from '@mui/material'
const MuiSelect = () => {
    const [country,setCountry]=useState('')

    const handleChange=(event)=>
    {
         setCountry(event.target.value)
    }
  return (
    <div>
      <Box width={350} >
           <TextField label='Select Country' select fullWidth value={country} onChange={handleChange} >
                   <MenuItem value='IN'>India</MenuItem>
                   <MenuItem value='US'>USA</MenuItem>
                   <MenuItem value='RSA'>Russia</MenuItem>
                   <MenuItem value='AUS'>Australia</MenuItem>
            </TextField>
      </Box>

    </div>
  )
}

export default MuiSelect