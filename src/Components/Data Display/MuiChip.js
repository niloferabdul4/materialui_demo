import { Avatar, Chip, Stack } from '@mui/material'
import React from 'react'
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';

const MuiChip = () => {

    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
      ]);

      const handleDelete=(item)=>{
        const filteredArr=chipData.filter(chip=>chip.label!==item.label)
        setChipData(filteredArr)
      }
  return (

    <Stack spacing={8}>
            <Stack direction='row' spacing={2}>
                <Chip label='Chip1' size='large' color='primary'/>
                <Chip label='Chip Outlined' variant='outlined' size='large' color='primary'/>
                <Chip label='Chip3' size='large' color='error'/>
            </Stack>

            {/******   Clickable and Deletable Chip   ********/}

            <Stack direction='row' spacing={2}>
                <Chip label='Clickable' color='success' onClick={()=>alert('Iam clicked')}/>
                <Chip label='Deletable' color='error' onDelete={()=>{alert('Iam deletable')}} />
            </Stack>

            {/********   Avatar and Icon Chip   **********/}

            <Stack direction='row' spacing={2}>
                <Chip label='Avatar Chip'  avatar={<Avatar sx={{bgcolor:'yellow'}}>N</Avatar>}/>
                <Chip label='Icon Chip' variant='outlined' icon={<FaceOutlinedIcon />}/>
                <Chip label='chip3' size='large' color='error'/>
            </Stack>

            {/********  Delete one chip from Chip Array    ***********/}
            <Stack direction='row' spacing={2}>
                {chipData.map((item,index)=>{return <>
                <Chip key={index} label={item.label}  onDelete={()=>handleDelete(item)}/>
                </>})}
            </Stack>
    </Stack>
  )
}

export default MuiChip
