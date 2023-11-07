
import { Box,FormControlLabel,Checkbox, FormGroup, FormControl} from '@mui/material'
import React, { useState } from 'react'

const MuiCheckbox = () => {
  // const [checked,setChecked]=useState(false)
   const checkData=[{id:1,title:'Javascript'},{id:2,title:'React Js'},{id:3,title:'HTML'},{id:1,title:'CSS'}]
    const [skills,setSkills]=useState([])
   
    const handleChange=(event)=>{
    const value=event.target.value
     if(event.target.checked)
     {
      setSkills([...skills,value])
     }
     else {
      
      setSkills(skills.filter(item=>item!==value))

     }

   
    
    }
    console.log(skills)
  return (
    <div> 
      {/*
       <Box>            
             <FormControlLabel label='I accept the terms and conditions' 
                              control={<Checkbox size='large' checked={checked}  onChange={(event)=>setChecked(event.target.checked)}/>} />   
        </Box>

  */}
         
            <FormControl component='fieldset'>
              <FormGroup>
                  {checkData.map(item=>{return <>
                  
                  <FormControlLabel label={item.title} 
                   value={item.title} 
                   control={<Checkbox size='large' checked={skills.includes(item.title)} onChange={handleChange} />}/>
                  </>})}
              </FormGroup>

         </FormControl>
  
    </div>
  )
}

export default MuiCheckbox
