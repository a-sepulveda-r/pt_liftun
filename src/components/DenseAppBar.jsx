import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import liftun from '../assets/liftun.png';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{ padding: '10px' }}
      >
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ width: '40px', height: '40px' }} />
          </IconButton>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <img
              src={liftun}
              style={{ width: '40px', height: '40px' }}
            />
            <Typography
              variant='h4'
              color='inherit'
              component='div'
            >
              Liftun
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
