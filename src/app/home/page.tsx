import React from 'react';
import Box from '@mui/material/Box';
import MainPageheader from '@/components/mainPage/LandingHeader';
import HomePageBanner from './sections/HomePageBanner';
import WhyChooseTurfReg from './sections/WhyChooseTurfReg';
import WhyChoosePlayerReg from './sections/WhyChoosePlayerReg';
import { Divider } from '@mui/material';

const MainHome = () => {
  return (
    <Box position={'relative'}>
      {/* header */}
      <MainPageheader />
      {/* banner section */}
      <HomePageBanner />

      {/* Why turf featuer */}
      <WhyChooseTurfReg />

      <Divider
        sx={{
          margin: 5,
          backgroundColor: 'rgba(0, 0, 0, 0.12)',
          height: 5,
        }}
      />

      {/* Player featuer */}
      <WhyChoosePlayerReg />
    </Box>
  );
};

export default MainHome;
