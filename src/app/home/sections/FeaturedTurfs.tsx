'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Use Grid2 for layout
import { motion } from 'framer-motion';
import Image from 'next/image';
import HorizontalScroll from '@/components/HorizontalScroll/HorizontalScroll';
import _map from 'lodash/map';

// Mock Data for Turfs
// const turfs = [
//   {
//     id: 1,
//     name: 'City Sports Arena',
//     image: '/images/turf1.jpg',
//     rating: 4.8,
//     price: '₹500/hr',
//     location: 'Mumbai',
//   },
//   {
//     id: 2,
//     name: 'GreenField Turf',
//     image: '/images/turf2.jpg',
//     rating: 4.7,
//     price: '₹600/hr',
//     location: 'Pune',
//   },
//   {
//     id: 3,
//     name: 'Elite Sports Zone',
//     image: '/images/turf3.jpg',
//     rating: 4.9,
//     price: '₹700/hr',
//     location: 'Delhi',
//   },
//   {
//     id: 4,
//     name: 'Sports Hub Arena',
//     image: '/images/turf4.jpg',
//     rating: 4.6,
//     price: '₹550/hr',
//     location: 'Bangalore',
//   },
//   {
//     id: 5,
//     name: 'Grand Play Turf',
//     image: '/images/turf5.jpg',
//     rating: 4.5,
//     price: '₹650/hr',
//     location: 'Hyderabad',
//   },
// ];

const FeaturedTurfs = ({ turfs }: any) => {
  return (
    <Box sx={{ py: 5, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
      <Typography variant='h4' fontWeight='bold' mb={3}>
        🏆 Featured Turfs
      </Typography>

      <HorizontalScroll>
        {_map(turfs, (turf, index) => (
          <motion.div
            key={turf?.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.3 }}
            style={{
              minWidth: '320px',
              backgroundColor: '#fff',
              padding: '16px',
              borderRadius: '10px',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              textAlign: 'left',
            }}
          >
            <Image
              src={turf?.image}
              alt={turf?.name}
              width={300}
              height={180}
              style={{ borderRadius: '8px', objectFit: 'cover', width: '100%' }}
            />
            <Typography variant='h6' mt={2} fontWeight='bold'>
              {turf?.name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              📍 {turf?.location}
            </Typography>
            <Typography variant='body1' fontWeight='bold' mt={1}>
              ⭐ {turf?.rating} | {turf?.price}
            </Typography>
            <Button
              variant='contained'
              fullWidth
              sx={{ mt: 2, backgroundColor: '#1976d2', color: '#fff' }}
            >
              Book Now
            </Button>
          </motion.div>
        ))}
      </HorizontalScroll>
    </Box>
  );
};

export default FeaturedTurfs;
