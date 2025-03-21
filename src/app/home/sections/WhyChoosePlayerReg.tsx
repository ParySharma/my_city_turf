'use client';
import AccordionComponent from '@/components/Accordion';
import { PlayerFeatures } from '@/utils/mockData';
import { Grid2, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { Fragment } from 'react';

const WhyChoosePlayerReg = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, sm: 12, md: 7 }}>
        <AccordionComponent
          mainHeading={
            <Typography
              variant='h3'
              fontSize={'2.5rem'}
              fontWeight={600}
              color='black'
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
                // ml={'16.0625rem'}
              >
                <Typography variant='h6' color='var(--color-text-secondary)'>
                  {item?.key}
                </Typography>
                <Typography variant='h5' color='var(--color-text-primary)'>
                  {item?.title}
                </Typography>
              </Stack>
            </Fragment>
          )}
          accordioncontant={(item) => (
            <Stack direction={'row'}>
              <Stack minWidth={56}></Stack>
              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                // ml={'16.0625rem'}
              >
                <Typography
                  variant='h6'
                  color='var(--color-text-secondary)'
                  sx={{
                    opacity: 0,
                  }}
                >
                  {item?.key}
                </Typography>
                <Typography color='var(--color-header-menu-text)'>
                  {item?.desc}
                </Typography>
              </Stack>
            </Stack>
          )}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 12, md: 5 }} textAlign={'center'}>
        <Image
          src={'/images/why-choose-player.jpg'}
          alt='why-choose-turfreg'
          width={550}
          height={600}
          unoptimized
        />
      </Grid2>
    </Grid2>
  );
};

export default WhyChoosePlayerReg;
