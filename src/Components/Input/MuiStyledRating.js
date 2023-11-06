import React from 'react'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Rating } from '@mui/material';


const MuiStyledRating = () => {
    const customIcons = [
        {
          icon: <SentimentVeryDissatisfiedIcon color="error" />,
          label: 'Very Dissatisfied',
        },
        {
          icon: <SentimentDissatisfiedIcon color="error" />,
          label: 'Dissatisfied',
        },
        {
          icon: <SentimentSatisfiedIcon color="warning" />,
          label: 'Neutral',
        },
         {
          icon: <SentimentSatisfiedAltIcon color="success" />,
          label: 'Satisfied',
        },
         {
          icon: <SentimentVerySatisfiedIcon color="success" />,
          label: 'Very Satisfied',
        },
    ]
  return (
    <>
    {customIcons.map(item=>{return <>
    <Rating emptyIcon={item.icon} />
    </>})}
 
    
    </>
  )
}

export default MuiStyledRating
