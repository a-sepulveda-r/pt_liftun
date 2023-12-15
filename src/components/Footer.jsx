import { Box, Container, Grid, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{ bgcolor: 'primary.main', color: 'white', p: 6, marginTop: '30px' }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          justifyContent='center'
        >
          <IconButton
            color='inherit'
            href='https://www.facebook.com/'
          >
            <Facebook sx={{ width: '30px', height: '30px' }} />
          </IconButton>
          <IconButton
            color='inherit'
            href='https://www.instagram.com/'
          >
            <Instagram sx={{ width: '30px', height: '30px' }} />
          </IconButton>
          <IconButton
            color='inherit'
            href='https://twitter.com/'
          >
            <Twitter sx={{ width: '30px', height: '30px' }} />
          </IconButton>
          <IconButton
            color='inherit'
            href='https://www.linkedin.com/'
          >
            <LinkedIn sx={{ width: '30px', height: '30px' }} />
          </IconButton>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
