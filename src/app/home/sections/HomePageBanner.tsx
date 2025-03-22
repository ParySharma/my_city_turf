'use client';
import { Box, Stack, Typography, styled } from '@mui/material';
import * as motion from 'motion/react-client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const StyledBox = styled(Box)`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 10px;
  height: 100%;
  max-height: 300px;
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  position: relative;
  overflow: hidden; // Ensure blur effect stays within bounds
  transition: background-color 0.3s;
  filter: grayscale(100%);

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
    filter: grayscale(0%);
  }
`;

const HomePageBanner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(/images/home-banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '700px',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '13%', sm: '35%', md: '50%' },
          right: { xs: '', sm: '50%', md: '50%' },
          transform: {
            xs: '',
            sm: 'translate(50%, -50%)',
            md: 'translate(50%, -50%)',
          },
          mt: { xs: '0%', md: '2%' },
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/images/banner-1-circle-bg.png")', // Replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
            animation: 'rotateBg 20s linear infinite',
          },
          '@keyframes rotateBg': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        }}
      >
        <Typography
          fontSize={'2.5rem'}
          fontWeight={500}
          color='white'
          textAlign={'center'}
        >
          Welcome to the{' '}
          <span
            style={{
              color: '#FFD700',
              fontWeight: 600,
            }}
          >
            My City Turf
          </span>{' '}
        </Typography>
        <Typography
          fontSize={'1.5rem'}
          fontWeight={500}
          color='white'
          textAlign={'center'}
          mb={2}
        >
          Your one stop solution for all your turf needs
        </Typography>
        <Typography
          fontSize={'2.5rem'}
          fontWeight={600}
          color='transparent'
          textAlign={'center'}
          sx={{
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
            fontFamily: "'Arial', sans-serif",
          }}
          m={2}
        >
          Register Now
        </Typography>

        <Stack
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          spacing={{ xs: 2, md: 10 }}
        >
          <StyledBox
            onClick={() => {
              window.open('/turf/register', '_blank');
            }}
            height={{ xs: '150px', md: 'inherit' }}
            width={{ xs: '150px', md: 'inherit' }}
            sx={{
              minHeight: { xs: '150px', md: '300px' },
              minWidth: { xs: '150px', md: '300px' },
            }}
          >
            <Image
              src='/images/turf-reg.png'
              alt='home-banner'
              fill // This replaces layout='fill'
              quality={100}
              unoptimized
              style={{ objectFit: 'cover' }} // This replaces objectFit='cover'
            />
          </StyledBox>

          <StyledBox
            onClick={() => {
              window.open('/player/register', '_blank');
            }}
            height={{ xs: '150px', md: 'inherit' }}
            width={{ xs: '150px', md: 'inherit' }}
            sx={{
              minHeight: { xs: '150px', md: '300px' },
              minWidth: { xs: '150px', md: '300px' },
            }}
          >
            <Image
              src='/images/player.png'
              alt='home-banner'
              fill
              quality={100}
              unoptimized
              style={{ objectFit: 'cover' }}
            />
          </StyledBox>
        </Stack>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-around'}
        >
          <Typography fontSize={'2rem'} fontWeight={500} color='white'>
            As Turf
          </Typography>
          <Typography fontSize={'2rem'} fontWeight={500} color='white'>
            As Player
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default HomePageBanner;
