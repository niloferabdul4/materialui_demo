import { Pagination, Stack } from '@mui/material'
import React, { useState } from 'react'

const MuiPagination = () => {
    const [currentPage,setCurrentPage]=useState(0)
    console.log(currentPage)
  return (
    <Stack spacing={4}>
      <Pagination count={10}/>
      <Pagination count={10} color='success' />
      <Pagination count={10}  color='primary' variant='outlined'/>
      <Pagination count={10} 
                  page={currentPage} 
                  color='success' 
                  onChange={(event,page)=>setCurrentPage(page)}  />    {/*controlled pagination */}
    </Stack>
  )
}

export default MuiPagination
