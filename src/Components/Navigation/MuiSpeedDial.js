import React from 'react'
import { SpeedDial,SpeedDialAction, SpeedDialIcon} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const MuiSpeedDial = () => {
  return (
    <SpeedDial ariaLabel='speedDial' sx={{position:'absolute', bottom:'16px',right:'16px'}} icon={<SpeedDialIcon/>}> 
        <SpeedDialAction icon={<ContentCopyIcon/>} tooltipTitle='Copy' />
        <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='Print' />
        <SpeedDialAction icon={<ShareIcon/>} tooltipTitle='Share'/>       
    </SpeedDial>
  )
}

export default MuiSpeedDial
