'use client';
import { Box, Stack, Typography } from '@mui/material';
import { SportsSoccer, Person } from '@mui/icons-material';
import React, { useState } from 'react';
import Image from 'next/image';

const HomePageBanner = () => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(/images/home-banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
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
          top: '3%',
          right: '1%',
          textAlign: 'center',
          maxWidth: '180px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        <Typography
          variant='h4'
          fontWeight={800}
          color='white'
          textAlign={'center'}
          sx={{
            fontFamily: "'Arial', sans-serif",
          }}
        >
          Choose your Destiny
        </Typography>
      </Box>

      {/* <Stack
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        mt={'96px'}
        sx={
          {
            // background: 'linear-gradient(#3b50bb, black, #197237)',
          }
        }
      >
        <Box
          className='slanted-edge-left'
          onMouseEnter={() => setHoverLeft(true)}
          onMouseLeave={() => setHoverLeft(false)}
        >
          <SportsSoccer
            sx={{
              fontSize: 60,
              color: hoverLeft ? 'white' : '#B5B5C3',
              transition: 'color 0.3s',
            }}
          />
          <Typography
            variant='h3'
            fontWeight={800}
            color='transparent'
            textAlign={'center'}
            sx={{
              WebkitTextStrokeWidth: '1px',
              WebkitTextStrokeColor: '#B5B5C3',
              fontFamily: "'Arial', sans-serif",
            }}
          >
            Turf Registration
          </Typography>
        </Box>

        <Typography
          variant='h3'
          fontWeight={800}
          color='transparent'
          textAlign={'center'}
          sx={{
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: '#B5B5C3',
            fontFamily: "'Arial', sans-serif",
          }}
        >
          Choose your Destiny
        </Typography>

        <Box
          className='slanted-edge-right'
          onMouseEnter={() => setHoverRight(true)}
          onMouseLeave={() => setHoverRight(false)}
        >
          <Person
            sx={{
              fontSize: 60,
              color: hoverRight ? 'white' : '#B5B5C3',
              transition: 'color 0.3s',
            }}
          />
          <Typography
            variant='h3'
            fontWeight={800}
            color='transparent'
            textAlign={'center'}
            sx={{
              WebkitTextStrokeWidth: '1px',
              WebkitTextStrokeColor: '#B5B5C3',
              fontFamily: "'Arial', sans-serif",
            }}
          >
            User Registration
          </Typography>
        </Box>
      </Stack> */}
    </Box>
  );
};

export default HomePageBanner;
