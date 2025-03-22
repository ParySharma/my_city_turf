'use client';
import React from 'react';
import Box from '@mui/material/Box';
import HomePageBanner from './sections/HomePageBanner';
import WhyChooseTurfReg from './sections/WhyChooseTurfReg';
import WhyChoosePlayerReg from './sections/WhyChoosePlayerReg';
import { Divider, Typography } from '@mui/material';
import MarqueeBannerSection from './sections/MarqueeBanner';
import ParallaxText from '@/components/ParallaxText/ParallaxText';
import FeaturedTurfs from './sections/FeaturedTurfs';
import { turfsData } from '@/utils/mockData';

const MainHome = () => {
  return (
    <Box position={'relative'}>
      {/* banner section */}
      <HomePageBanner />

      {/* marquee banner */}
      <MarqueeBannerSection />

      {/* Featured Turfs  */}
      <FeaturedTurfs turfs={turfsData} />

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
