import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';


const MuiBottomNavigation = () => {
    const [selectedMenu,setSelectedMenu]=useState(0)
    //console.log(selectedMenu)
  
  return (
    <>
      <BottomNavigation  sx={{width:'100%',position:'absolute', bottom:'0px'}}
                        showLabels
                        value={selectedMenu}  
                        onChange={(event,newValue) => {
                            setSelectedMenu(newValue);
                            }}>
            <BottomNavigationAction label='Home'  icon={<HomeIcon />} />
            <BottomNavigationAction label='Profile' icon={<PersonIcon/>}  />
            <BottomNavigationAction  label='Favourites' icon={<FavoriteIcon/>}  />
      </BottomNavigation>
    </>
  )
}

export default MuiBottomNavigation


 const Home=()=>{
    return(
        <div id='home'>
        home
        </div>
    )
}


const Profile=()=>{
    return(
        <div id='profile'>
        profile
        </div>
    )
}