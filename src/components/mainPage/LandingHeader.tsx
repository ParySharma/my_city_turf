'use client';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  styled,
  Container,
} from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import React from 'react';
import { MAINHEADERLIST, SCREEN_SOLUTION } from '@/utils/constants';
import _map from 'lodash/map';
import { useRouter } from 'next/navigation';
import { useDynamicMargin } from '@/utils/useDynamicMargin';
import Image from 'next/image';

const SportsHeader = () => {
  const router = useRouter();

  return (
    <AppBar
      position='fixed'
      color='transparent'
      style={{
        backgroundColor: '#000000ad',
        boxShadow: 'none',
        color: 'white',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: { xs: 0, sm: 5, md: 10, lg: 10, xl: 20 },
        }}
      >
        {/* Left Side - Icon */}
        <IconButton edge='start' color='inherit' aria-label='logo'>
          <Image
            src='/images/logo.jpg'
            alt='logo'
            width={60}
            height={60}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </IconButton>

        {/* Center - Menu */}
        <Typography
          variant='h6'
          component='div'
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {_map(MAINHEADERLIST, (item) => (
            <Button
              color='inherit'
              key={item?.label}
              onClick={() => router.push(item?.link)}
              style={{
                fontWeight: 500,
              }}
            >
              {item?.label}
            </Button>
          ))}
        </Typography>

        {/* Right Side - Register/Login */}
        <div>
          <Button color='inherit'>Register</Button>
          <Button color='inherit'>Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SportsHeader;
