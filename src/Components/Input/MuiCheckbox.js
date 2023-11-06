
import { Box,FormControlLabel,Checkbox, FormGroup} from '@mui/material'
import React, { useState } from 'react'

const MuiCheckbox = () => {
   const [checked,setChecked]=useState(false)
    const [skills,setSkills]=useState([])
   
    const handleChange=(event)=>{
     const {name,checked}=event.target;
     setSkills(skills=>({...skills,[name]:checked}))
    
    }
    console.log(skills)
  return (
    <div> 
       <Box>            
             <FormControlLabel label='I accept the terms and conditions' 
                              control={<Checkbox size='large' checked={checked}  onChange={(event)=>setChecked(event.target.checked)}/>} />   
        </Box>
  
  {/*
         <Box>
              <FormGroup>
                  <FormControlLabel label='javascript' name='javascript' control={<Checkbox size='large' checked={javascript} onChange={handleChange}/>}/>
                  <FormControlLabel label='React Js' name='reactjs' control={<Checkbox size='large'  checked={reactjs} onChange={handleChange}/>}/>
                  <FormControlLabel label='HTML'name='html' control={<Checkbox size='large'  checked={html} onChange={handleChange}/>}/>
                  <FormControlLabel label='CSS' name='css' control={<Checkbox size='large'  checked={css} onChange={handleChange}/>}/>
              </FormGroup>

         </Box>
  */}  
    </div>
  )
}

export default MuiCheckbox
