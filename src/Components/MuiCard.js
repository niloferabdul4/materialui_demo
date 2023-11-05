import React from 'react'
import { Stack,Card, Typography, CardContent,Box, CardActions, Button, CardMedia} from '@mui/material'
const MuiCard = () => {
  return (
    <div>
        <Stack direction='row' spacing={2}>
            <Box width='300px'>
           <Card>
              <CardContent  >
                <Typography gutterBottom variant='h6' component='div'>Html</Typography>
               <Typography variant='body1' textAlign='justify' >HTML is the standard markup language for Web pages. With HTML you can create your own Website.</Typography>
              </CardContent>
              <CardActions>
                <Button variant='text' >Share</Button>
                <Button variant='text' >Learn More..</Button>
              </CardActions>
           </Card>
           
           </Box>
           <Box width='300px'>
           <Card>
              <CardMedia width='100%'  
                        component='img' 
                        image='https://d3m1rm8xuevz4q.cloudfront.net/wp-content/uploads/2020/02/blog_what_is_html.jpg.webp' 
                        alt='html'/>
              <CardContent  >
                
               <Typography variant='body1' textAlign='justify' >HTML is the standard markup language for Web pages. With HTML you can create your own Website.</Typography>
              </CardContent>
              <CardActions>
                <Button variant='text' >Share</Button>
                <Button variant='text' >Learn More..</Button>
              </CardActions>
           </Card>
           
           </Box>
        </Stack>
      
    </div>
  )
}

export default MuiCard
