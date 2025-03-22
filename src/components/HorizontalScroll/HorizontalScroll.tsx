'use client';
import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Box } from '@mui/material';

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const carouselRef = useRef(null);
  const { scrollX } = useScroll({ container: carouselRef });

  return (
    <Box
      ref={carouselRef}
      sx={{
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        scrollbarWidth: 'none',
        '-ms-overflow-style': 'none',
        '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar for a clean UI
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          gap: '24px',
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default HorizontalScroll;
