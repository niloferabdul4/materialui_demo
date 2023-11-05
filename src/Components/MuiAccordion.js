import { Accordion, AccordionDetails, AccordionSummary,Typography } from '@mui/material'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import React, { useState } from 'react'

const MuiAccordion = () => {
   
  return (
    <div>
        
      <Accordion>
        <AccordionSummary id='accordion1' expandIcon={<ExpandMoreOutlinedIcon />}>
             <Typography variant='h5'>Accordion1</Typography>
        </AccordionSummary>
        <AccordionDetails>
             <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam amet voluptates voluptatem minus quaerat ex vero officia laborum optio hic sint sapiente corporis facilis architecto, excepturi pariatur eos harum laudantium!</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary id='accordion2' expandIcon={<ExpandMoreOutlinedIcon />}>
             <Typography variant='h5'>Accordion2</Typography>
        </AccordionSummary>
        <AccordionDetails>
             <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam amet voluptates voluptatem minus quaerat ex vero officia laborum optio hic sint sapiente corporis facilis architecto, excepturi pariatur eos harum laudantium!</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary id='accordion3' expandIcon={<ExpandMoreOutlinedIcon />}>
             <Typography variant='h5'>Accordion3</Typography>
        </AccordionSummary>
        <AccordionDetails>
             <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam amet voluptates voluptatem minus quaerat ex vero officia laborum optio hic sint sapiente corporis facilis architecto, excepturi pariatur eos harum laudantium!</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MuiAccordion
