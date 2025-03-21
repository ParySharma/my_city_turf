'use client';
import AccordionComponent from '@/components/Accordion';
import { TurfOwnerFeatuer } from '@/utils/mockData';
import { Grid2, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { Fragment } from 'react';

const WhyChooseTurfReg = () => {
  return (
    <Grid2 container spacing={2} mt={10}>
      <Grid2 size={{ xs: 12, sm: 12, md: 5 }} textAlign={'center'}>
        <Image
          src={'/images/why-choose-furf.jpg'}
          alt='why-choose-turfreg'
          width={500}
          height={500}
          unoptimized
        />
      </Grid2>
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
                My City Turf?
              </span>
            </Typography>
          }
          mainDescription={`For Turf Owners 🏟️
          Header: Grow Your Business & Manage Bookings Seamlessly`}
          data={TurfOwnerFeatuer}
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
    </Grid2>
  );
};

export default WhyChooseTurfReg;
