import { Tab, Tabs,Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const MuiTabs = () => {
    const [value,setValue]=useState(0)
  return (
    <Stack spacing={4}>
     
      <Box sx={{width:'500px',bgcolor:'white'}} >
           <Tabs value={value} onChange={(event,newValue)=>{setValue(newValue)}}>
                <Tab label='Item1'/>
                <Tab label='Item2'/>
                <Tab label='Item3'/>
                <Tab label='Item4'/>
           </Tabs>
      </Box>

{/******   Scrollable Tabs ********/}

      <Box sx={{width:'500px',bgcolor:'white'}} >
           <Tabs variant='scrollable' value={value} scrollButtons='auto' onChange={(event,newValue)=>{setValue(newValue)}}>
                <Tab label='Item1'/>
                <Tab label='Item2'/>
                <Tab label='Item3'/>
                <Tab label='Item4'/>
                <Tab label='Item5'/>
                <Tab label='Item6'/>
                <Tab label='Item7'/>
                <Tab label='Item8'/>
           </Tabs>
      </Box>

      {/******  Icon Tabs  ******/}
      <Box>
         <Tabs  value={value}  onChange={(event,newValue)=>{setValue(newValue)}}>
            <Tab  icon={<PhoneIcon/>}  aria-label="phone" />
            <Tab icon={<FavoriteIcon/>} aria-label="favourites" />
            <Tab icon={<PersonPinIcon/>} aria-label="person" />
         </Tabs>
      </Box>

      
      {/******  Icon Tabs With label  ******/}
      <Box>
         <Tabs  value={value}  onChange={(event,newValue)=>{setValue(newValue)}}>
            <Tab  icon={<PhoneIcon/>}  label="Phone" />
            <Tab icon={<FavoriteIcon/>} label="Favourites" />
            <Tab icon={<PersonPinIcon/>} label="Person" />
         </Tabs>
      </Box>
    </Stack>
  )
}

export default MuiTabs
