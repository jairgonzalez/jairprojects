import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@material-ui/core';



import Link from '../src/Link';
import Copyright from '../src/Copyright';

function Home() {
  return (
    <Container maxWidth="sm">
      
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
       
          <Copyright />
        
      </Box>
    </Container>
  );
}

export default Home;
