import { Box, Divider, List, ListItem, ListItemIcon, ListItemText,Avatar, ListItemAvatar, ListItemButton} from '@mui/material'
import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const MuiList = () => {
  return (
    <div>
      <Box sx={{width:'400px', bgcolor:'white'}}>
          <List>
            <ListItem  >
                <ListItemIcon>
                     <EmailOutlinedIcon/>
                </ListItemIcon>
                <ListItemText  primary='list item1'/>
            </ListItem>
            <Divider/>
            <ListItem>                
                <ListItemAvatar>
                <Avatar src='/assets/agent8.png' alt='agent8' />
                </ListItemAvatar>
                <ListItemText primary='list item2'/>
            </ListItem>
            <Divider/>
            <ListItem>
                <ListItemIcon>
                     <EmailOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='list item3'/>
            </ListItem>
            <Divider/>
            <ListItem>                
                <ListItemAvatar>
                <Avatar src='/assets/agent8.png' alt='agent8' />
                </ListItemAvatar>
                <ListItemText primary='list item2' secondary='secondary text'/>
            </ListItem>
            <Divider/>
            {/**** to make clickable List item button  ******/}

            <ListItem disablePadding >
                <ListItemButton>
                    <ListItemIcon>
                        <EmailOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText  primary='list item1'/>
                </ListItemButton>
            </ListItem>
          </List>
      </Box>
    </div>
  )
}

export default MuiList
