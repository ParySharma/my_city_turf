'use client';
import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: <Facebook />, link: '#' },
  { icon: <Twitter />, link: '#' },
  { icon: <Instagram />, link: '#' },
  { icon: <LinkedIn />, link: '#' },
];

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', py: 4 }} mt={5}>
      <Container maxWidth='lg'>
        <Grid2 container spacing={4} justifyContent='center'>
          {/* Left Section */}
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant='h6' fontWeight='bold'>
              My City Turf
            </Typography>
            <Typography variant='body2' mt={1}>
              Find and book the best turfs in your city for various sports.
            </Typography>
          </Grid2>

          {/* Middle Section - Quick Links */}
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant='h6' fontWeight='bold'>
              Quick Links
            </Typography>
            <Typography variant='body2' mt={1}>
              <a href='#' style={{ color: 'white', textDecoration: 'none' }}>
                Home
              </a>
            </Typography>
            <Typography variant='body2' mt={1}>
              <a href='#' style={{ color: 'white', textDecoration: 'none' }}>
                About Us
              </a>
            </Typography>
            <Typography variant='body2' mt={1}>
              <a href='#' style={{ color: 'white', textDecoration: 'none' }}>
                Contact
              </a>
            </Typography>
          </Grid2>

          {/* Right Section - Social Icons */}
          <Grid2 size={{ xs: 12, sm: 12, md: 4 }} textAlign='center'>
            <Typography variant='h6' fontWeight='bold'>
              Follow Us
            </Typography>
            <Box mt={1} display='flex' justifyContent='center' gap={1}>
              {socialLinks.map((item, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2 }}>
                  <IconButton sx={{ color: 'white' }} href={item?.link}>
                    {item?.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Grid2>
        </Grid2>

        {/* Bottom Section */}
        <Box mt={3} textAlign='center'>
          <Typography variant='body2'>
            © {new Date().getFullYear()} My City Turf. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
