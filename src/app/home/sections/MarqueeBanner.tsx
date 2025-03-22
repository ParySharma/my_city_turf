'use client';
import MarqueeBanner from '@/components/Transition/MarqueeBanner';
import React from 'react';
import _map from 'lodash/map';
import { SportsList } from '@/utils/mockData';
import { Box, Typography } from '@mui/material';
import ParallaxText from '@/components/ParallaxText/ParallaxText';

const MarqueeBannerSection = () => {
  const sportsText = _map(SportsList, (sport: any) => (
    <span key={sport.key} style={{ color: sport.color }}>
      {sport.name} {sport.emoji}
    </span>
  ));

  return (
    <Box>
      <section>
        <ParallaxText baseVelocity={-5}>
          <Typography
            variant='h2'
            color='transparent'
            sx={{
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: '#B5B5C3',
            }}
          >
            🏏 Cricket | 🏸 Badminton | ⚽ Football
          </Typography>
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          <Typography
            variant='h2'
            color='transparent'
            sx={{
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: '#B5B5C3',
            }}
          >
            🎾 Tennis | 🏀 Basketball | 🏐 Volleyball
          </Typography>
        </ParallaxText>
      </section>
      {/* <MarqueeBanner text={sportsText} effect='none' fontStyle='italic' /> */}
    </Box>
  );
};

export default MarqueeBannerSection;
