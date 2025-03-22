'use client';
import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeBanner = ({
  text = 'TurfReg',
  effect = 'border',
  textColor,
  fontStyle,
}: any) => {
  return (
    <Marquee speed={35} gradient={false}>
      {text ? (
        <Typography
          fontSize='8.75rem'
          sx={{
            display: 'inline-block',
            fontSize: '80px',
            fontWeight: '600',
            lineHeight: '160%',
            fontFamily: "'Arial', sans-serif",
            textAlign: 'center',
            fontStyle: fontStyle,
            color: textColor || 'white',
            ...(effect === 'border'
              ? {
                  WebkitTextStrokeWidth: '1px',
                  WebkitTextStrokeColor: '#B5B5C3',
                }
              : effect === 'grow'
              ? {
                  textShadow: '0px 0px 10px grey',
                }
              : {}),
          }}
        >
          <span>
            {text} * {text} * {text} * {text} * {text} * {text} *
          </span>
          <span>
            {text} * {text} * {text} * {text} * {text} * {text} *
          </span>
        </Typography>
      ) : (
        <Image src='/images/logo.png' alt='TurfReg' width={200} height={200} />
      )}
    </Marquee>
  );
};

export default MarqueeBanner;
