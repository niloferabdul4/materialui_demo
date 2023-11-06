import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const MuiBreadcrumbs = () => {
  return (
    <div>
      <Breadcrumbs aria-label='bread-crumbs' >
           
            <Link underline='hover' variant='h6'>Home</Link>
            <Link underline='hover' variant='h6'>Products</Link>
            <Link underline='hover' variant='h6'>Garments</Link>
            <Typography variant='h6'>Shirts</Typography>
      </Breadcrumbs>

      <Breadcrumbs aria-label='bread-crumbs' 
                   separator={<NavigateNextIcon/>}
                    maxItems={3}
                    itemsAfterCollapse={1} 
                    itemsBeforeCollapse={2}>
           
           <Link underline='hover' variant='h6'>Home</Link>
           <Link underline='hover' variant='h6'>Products</Link>
           <Link underline='hover' variant='h6'>Garments</Link>
           <Typography variant='h6'>Shirts</Typography>
     </Breadcrumbs>

    </div>
  )
}

export default MuiBreadcrumbs
