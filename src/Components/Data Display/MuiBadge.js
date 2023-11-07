import { Badge, Stack } from '@mui/material'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const MuiBadge = () => {
  return (
    <div>
      <Stack direction='row' spacing={3} py={6}>
          <Badge badgeContent={2} color='success'  >
              <ShoppingCartOutlinedIcon fontSize='large'/>
          </Badge>

          <Badge badgeContent={2} color='info'>
             <EmailOutlinedIcon fontSize='large'/>
          </Badge>

          <Badge badgeContent={100} color='info'>
             <EmailOutlinedIcon fontSize='large'/>
          </Badge>

          <Badge badgeContent={100} color='info' max={999}>
             <EmailOutlinedIcon fontSize='large'/>
          </Badge>

          {/******  For Notification  *******/}

          <Badge variant='dot' color='secondary'>
             <EmailOutlinedIcon/>
          </Badge>
      </Stack>
    </div>
  )
}

export default MuiBadge
