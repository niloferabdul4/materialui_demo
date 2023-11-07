import { Stack,Avatar, AvatarGroup } from '@mui/material'
import React from 'react'

const MuiAvatar = () => {
  return (
    <Stack spacing={3}>
       <Stack direction='row' spacing={3}>
        <Avatar sx={{bgcolor:'red'}}>NI</Avatar>
        <Avatar>AB</Avatar>
        <Avatar>FA</Avatar>
      </Stack>
      <Stack direction='row' spacing={3}>
        <Avatar src='/assets/agent8.png' alt='agent8' />
        <Avatar src='/assets/agent2.png' alt='agent2'/>
        <Avatar src='/assets/agent5.png' alt='agent5'/>
      </Stack>

      <Stack  direction='row' spacing={3}>
         {/* Avatar group */}
      <AvatarGroup>
         <Avatar sx={{bgcolor:'red'}}>NI</Avatar>
        <Avatar>AB</Avatar>
        <Avatar>FA</Avatar>
      </AvatarGroup>

      {/*max avatar */}
      <AvatarGroup max={3}>
         <Avatar variant='square' sx={{bgcolor:'red'}}>NI</Avatar>
         <Avatar variant='rounded' sx={{bgcolor:'red'}}>NI</Avatar>
        <Avatar>AB</Avatar>
        <Avatar>FA</Avatar>
        <Avatar src='/assets/agent8.png' alt='agent8' />
        <Avatar src='/assets/agent2.png' alt='agent2'/>
        <Avatar src='/assets/agent5.png' alt='agent5'/>
      </AvatarGroup>

      </Stack>
     
    </Stack>
  )
}

export default MuiAvatar
