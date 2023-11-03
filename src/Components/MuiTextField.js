import React,{useState} from 'react'
import { InputAdornment, Stack, TextField } from '@mui/material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const MuiTextfield = () => {
  const [text,setText]=useState('')

  return (
    <div>
      <Stack direction='column'  spacing={6}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name'  variant='outlined' required/>           
            <TextField label='Email'  variant='standard' />
            <TextField label='Password' type='password' variant='filled' required helperText='Do not share your passwords with anyone'/>
            <TextField label='Write here...'  variant='outlined' multiline />
        </Stack>

        {/*********   Adding InputProps-startAdornment-<InputAdornment> */}

        <Stack direction='row' spacing={2}>
            <TextField label='Read Only'  variant='outlined' InputProps={{readOnly:true}}/>   
            <TextField label='Price' variant='outlined' InputProps={{startAdornment:<InputAdornment position='start'>$</InputAdornment>}}/>
            <TextField label='Percentage' variant='outlined' InputProps={{endAdornment:<InputAdornment position='end'>%</InputAdornment>}}/>
            <TextField label='Weight' variant='outlined' InputProps={{endAdornment:<InputAdornment position='end'>kg</InputAdornment>}}/>
        </Stack>
        <Stack direction='row' spacing={3}>
             <TextField label='Pswd' type='password' InputProps={{endAdornment:<InputAdornment position='end'><VisibilityOutlinedIcon/></InputAdornment>}} />
             <TextField label='Password' type='password' value={text} onChange={(event)=>setText(event.target.value)} error={!text} helperText={!text?'Required' :'Dont share pwd with anyone'} />
        </Stack>
        </Stack>
       
    </div>
  )
}

export default MuiTextfield