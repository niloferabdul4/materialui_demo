import { FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

const MuiSwitch = () => {
    const [darkmode,setDarkmode]=useState(false)
    console.log(darkmode)
  return (
    <div>
      <FormControlLabel label='Dark Mode'  
      control={<Switch checked={darkmode} required onChange={()=>{setDarkmode(!darkmode)}} />}/>
       <FormControlLabel label='Dark Mode'  
      control={<Switch checked={darkmode} onChange={()=>{setDarkmode(!darkmode)}} />}/>
    </div>
  )
}

export default MuiSwitch
