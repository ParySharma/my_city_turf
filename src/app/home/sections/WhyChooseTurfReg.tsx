'use client';
import AccordionComponent from '@/components/Accordion';
import MarqueeTransition from '@/components/Transition/Marquee';
import { TurfOwnerFeatuer } from '@/utils/mockData';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { Box, Grid2, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { Fragment } from 'react';

const WhyChooseTurfReg = () => {
  return (
    <Grid2 container mt={5} position={'relative'}>
      <Grid2
        size={{ xs: 12, sm: 12, md: 5 }}
        textAlign={'center'}
        sx={{
          backgroundColor: 'lighgrey',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <MarqueeTransition
          text='Own Turf Space'
          bottom={'10%'}
          effect='grow'
          zIndex={-1}
          direction='right'
        />
        <Image
          src={'/images/why-choose-furf.jpg'}
          alt='why-choose-turfreg'
          width={500}
          height={500}
          unoptimized
          style={{
            mixBlendMode: 'difference',
            width: '100%',
            height: '100%',
          }}
        />
      </Grid2>
      <Grid2
        size={{ xs: 12, sm: 12, md: 7 }}
        sx={{
          backgroundColor: '#0d0d0d',
          padding: '2rem',
          borderRadius: '20px 0 0 20px',
        }}
      >
        <AccordionComponent
          mainHeading={
            <Typography
              variant='h3'
              fontSize={'2.5rem'}
              fontWeight={600}
              color='white'
            >
              Why Register on{' '}
              <span style={{ color: 'var(--body-text-color)' }}>
                My City Turf?
              </span>
            </Typography>
          }
          mainDescription={`Grow Your Business & Manage Bookings Seamlessly`}
          data={TurfOwnerFeatuer}
          accordionHeader={(item) => (
            <Fragment>
              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                sx={{
                  minHeight: '100%',
                  // minWidth: '60%',
                  padding: '0 1rem',
                  color: '#fff',
                  backgroundColor: 'var(--input-border-color)',
                  borderRadius: '20px',
                }}
                // ml={'16.0625rem'}
              >
                <Typography variant='h6' color='white'>
                  {item?.key}
                </Typography>
                <Typography variant='h5' color='white'>
                  {item?.title}
                </Typography>
              </Stack>
            </Fragment>
          )}
          accordioncontant={(item) => (
            <Stack direction={'row'}>
              <Stack minWidth={56}>
                <SubdirectoryArrowRightIcon
                  sx={{
                    color: 'white',
                  }}
                />
              </Stack>
              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                // ml={'16.0625rem'}
              >
                <Typography
                  variant='h6'
                  color='white'
                  sx={{
                    opacity: 0,
                  }}
                >
                  {item?.key}
                </Typography>
                <Typography color='white'>{item?.desc}</Typography>
              </Stack>
            </Stack>
          )}
        />
      </Grid2>
      {/* <Box
        position={'absolute'}
        top={'-5%'}
        right={'0%'}
        zIndex={1}
        display={{ xs: 'none', sm: 'none', md: 'block' }}
        sx={{
          // transform: 'rotate(180deg)',
          opacity: 0.5,
          minHeight: '100%',
          minWidth: '60%',
          backgroundColor: 'red',
          borderRadius: '20px 0 0 20px',
        }}
      ></Box> */}
    </Grid2>
  );
};

export default WhyChooseTurfReg;
