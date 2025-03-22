'use client';
import AccordionComponent from '@/components/Accordion';
import MarqueeTransition from '@/components/Transition/Marquee';
import { PlayerFeatures } from '@/utils/mockData';
import { Grid2, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import React, { Fragment } from 'react';

const WhyChoosePlayerReg = () => {
  return (
    <Grid2 container mt={5} position={'relative'}>
      <Grid2
        size={{ xs: 12, sm: 12, md: 7 }}
        sx={{
          backgroundColor: '#0d0d0d',
          padding: '2rem',
          borderRadius: '0px 20px 20px 0px',
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
                As Players ⚽🏏
              </span>
            </Typography>
          }
          mainDescription={`Find, Book & Play at the Best Turfs in Your City`}
          data={PlayerFeatures}
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
                  backgroundColor: '#0a4876',
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
          text='Own Play Area'
          bottom={'70%'}
          effect='grow'
          zIndex={-1}
        />
        <Image
          src={'/images/why-choose-player.jpg'}
          alt='why-choose-turfreg'
          width={550}
          height={600}
          unoptimized
          style={{
            mixBlendMode: 'difference',
            height: '100%',
            width: '100%',
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default WhyChoosePlayerReg;
