import React, { useState } from 'react'
import { Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio, FormHelperText} from '@mui/material'
const MuiRadio = () => {
    const [currentValue,setCurrentValue]=useState('')
    console.log(currentValue)
  return (
    <div>
      <Box>
        <FormControl >
            <FormLabel id='job-experience-formlabel'>Years Of Experience</FormLabel>
            <RadioGroup name='job-experience' 
                        aria-labelledby='job-experience-formlabel' 
                        value={currentValue} 
                        onChange={(event)=>setCurrentValue(event.target.value)}>
                <FormControlLabel value='0-1' label='0-1' control={<Radio size='large' color='secondary'/>}/>
                <FormControlLabel value='2-3'  label='2-3' control={<Radio/>}/>
                <FormControlLabel value='5'  label='5'control={<Radio/>}/>       
            </RadioGroup>
           {/* <FormHelperText >Invalid Selection</FormHelperText>*/}
        </FormControl>
      </Box>
    </div>
  )
}

export default MuiRadio
