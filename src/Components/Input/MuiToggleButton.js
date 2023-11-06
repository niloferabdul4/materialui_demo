import React, { useState } from 'react'
import { ToggleButton,ToggleButtonGroup,Stack } from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

// Multiple Selection(store data in array)
{/*
const MuiToggleButton = () => {
    const [formats,setFormats]=useState([])
    const handleChange=(value)=>{
        setFormats(value)
        console.log(value)
    }
  return (
    <div>
       <Stack direction='row'>
                <ToggleButtonGroup aria-label='text formatting' orientation='vertical' value={formats} onChange={handleChange}>
                    <ToggleButton value='bold'  >
                         <FormatBoldIcon/>
                    </ToggleButton>
                    <ToggleButton value='italic' >
                        <FormatItalicIcon/>
                    </ToggleButton>
                    <ToggleButton value='underlined' >
                        <FormatUnderlinedIcon/>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
    </div>
  )
}

*/}

/// Single Selection  (add exclusive)

const MuiToggleButton = () => {
    const [formats,setFormats]=useState('')
    const handleChange=(event,value)=>{
        setFormats(value)
        //console.log(value)
    }
  return (
    <div>
       <Stack direction='row'>
                <ToggleButtonGroup aria-label='text formatting' orientation='vertical' value={formats} onChange={handleChange} exclusive>
                    <ToggleButton value='bold'  >
                         <FormatBoldIcon/>
                    </ToggleButton>
                    <ToggleButton value='italic' >
                        <FormatItalicIcon/>
                    </ToggleButton>
                    <ToggleButton value='underlined' >
                        <FormatUnderlinedIcon/>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
    </div>
  )
}
export default MuiToggleButton