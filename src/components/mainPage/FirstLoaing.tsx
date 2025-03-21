import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import SportsRugbyIcon from '@mui/icons-material/SportsRugby';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'; // Gaming icon

const sportsIcons = [
  SportsSoccerIcon,
  SportsBasketballIcon,
  SportsCricketIcon,
  SportsTennisIcon,
  SportsFootballIcon,
  SportsVolleyballIcon,
  SportsGolfIcon,
  SportsHockeyIcon,
  SportsHandballIcon,
  SportsRugbyIcon,
  SportsEsportsIcon,
];

const FirstLoading = () => {
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % sportsIcons.length);
    }, 1000); // Change icon every second

    return () => clearInterval(interval);
  }, []);

  const IconComponent = sportsIcons[iconIndex];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          animation: 'bounce 1.5s infinite ease-in-out',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-30px)' },
          },
        }}
      >
        <IconComponent sx={{ fontSize: 180, color: '#1976d2' }} />
      </Box>
      <Typography variant='h4'>Getting Ready...</Typography>
    </Box>
  );
};

export default FirstLoading;
