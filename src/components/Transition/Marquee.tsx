import { Box, Typography } from '@mui/material';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeTransition = ({
  text,
  top,
  right,
  bottom,
  left,
  effect,
  zIndex,
  direction,
}: {
  text: string;
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  effect?: 'grow' | 'border';
  zIndex?: number;
  direction?: 'left' | 'right';
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: top,
        bottom: bottom,
        right: right,
        left: left,
        width: '100%',
        zIndex: zIndex,
      }}
    >
      <Marquee speed={35} gradient={false} direction={direction}>
        <Typography
          fontSize='8.75rem'
          sx={{
            display: 'inline-block',
            fontSize: '100px',
            fontWeight: '600',
            lineHeight: '160%',
            fontFamily: "'Arial', sans-serif",
            textAlign: 'center',
            color: 'white',
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
      </Marquee>
    </Box>
  );
};

export default MarqueeTransition;
