import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Tooltip } from '@mui/material';
import HtmlIcon from '@mui/icons-material/Html';
const MuiTooltip = () => {
  return (
    <div>
        
        <Tooltip title='Delete'>
            <IconButton >
                <DeleteIcon size='40px'/>
            </IconButton>
      </Tooltip>

      {/**** text to the right  && arrow text box *****/}

      <Tooltip placement='right' 
      title='HTML is the standard markup language for Web pages. With HTML you can create your own Website' 
      arrow>
        <IconButton>
            <HtmlIcon/>
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default MuiTooltip
