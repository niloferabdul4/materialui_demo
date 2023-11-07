import React from 'react'
import { CircularProgress, LinearProgress } from '@mui/material'

const MuiProgress = () => {
  return (
    <div>
      <CircularProgress />
      <CircularProgress variant='determinate' value={50}/>
      <LinearProgress/>
      
    </div>
  )
}

export default MuiProgress
