'use client';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';
import _map from 'lodash/map';
import { ArrowDownwardIcon } from '@/images';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Fragment, SyntheticEvent, useState } from 'react';

interface AccordionProps {
  data: {
    title: string;
    key: string;
    desc: string;
    desc2?: string;
    desc3?: string;
    freshers?: any;
    experience?: any;
    location?: string;
    contributionsDescription?: string;
    contributions?: any;
    expectations?: any;
    capabilities?: any;
  }[];
  accordionHeader?: (item: any) => React.ReactNode;
  accordioncontant?: (item: any) => React.ReactNode;
  mt?: any;
  mainHeading: any;
  mainDescription?: string;
  discoveryIcon?: boolean;
  displaySideIcon?: boolean;
}

const AccordionComponent = ({
  data,
  accordionHeader,
  accordioncontant,
  mt,
  mainHeading,
  mainDescription,
  displaySideIcon = true,
  discoveryIcon = false,
  ...rest
}: StackProps & AccordionProps) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Stack position={'relative'}>
      <Grid
        container
        position={'absolute'}
        width={'100%'}
        height={'100%'}
        zIndex={-1}
        display={{ xs: 'none', md: 'flex' }}
      >
        <Grid size={{ md: 3.8 }}></Grid>
        <Grid
          size={{ md: 8.2 }}
          sx={{
            backgroundColor: 'var(--card-background)',
            borderTopLeftRadius: '12px',
            borderBottomLeftRadius: '12px',
          }}
        ></Grid>
      </Grid>
      <Stack
        sx={{
          pl: { xs: '0px !important', md: '80px !important' },
          pr: { xs: '0px !important', md: '80px !important' },
          // background: { xs: '#fafafa', md: '#fafafa' },
        }}
      >
        {mainHeading}
        {mainDescription && (
          <Box maxWidth={'650px'}>
            <Typography
              mt={1}
              variant='body1'
              color='white'
              textTransform={'capitalize'}
            >
              {mainDescription}
            </Typography>
          </Box>
        )}

        <Stack {...rest} mt={3}>
          {_map(data, (item, index) => (
            <Accordion
              key={index}
              disableGutters
              sx={{
                boxShadow: 'none',
                borderBottom: '1px solid lightgrey',
                '::before': { display: 'none' },
                backgroundColor: 'transparent',
                ':first-of-type': {
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderTop: '1px solid lightgrey',
                },
                ':last-of-type': {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                },

                '.MuiAccordionSummary-root': {
                  fontFamily: 'inherit',
                },
                '.MuiAccordionSummary-content': {
                  margin: '16px 0',
                  display: 'flex',
                  alignItems: 'center',
                },
              }}
              expanded={expanded === item?.key}
              onChange={handleChange(item?.key)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    // color={expanded === item?.key ? ' blue' : 'black'}
                    sx={{
                      color: expanded === item?.key ? 'blue' : 'white',
                    }}
                  />
                }
                aria-controls='panel1-content'
                id='panel1-header'
                sx={{
                  img: {
                    minWidth: 32,
                    width: { xs: 32, md: 56 },
                    height: { xs: 32, md: 56 },
                  },
                }}
              >
                {accordionHeader ? (
                  accordionHeader(item)
                ) : (
                  <Fragment>
                    <Stack
                      direction={'row'}
                      // gap={{ xs: 1.75, md: 3 }}
                      alignItems={'center'}
                      // ml={{ xs: '15px', md: '16.0625rem' }}
                    >
                      <Typography
                        variant='h6'
                        fontSize={{ xs: '14px', md: '1.125rem' }}
                      >
                        {item?.key}
                      </Typography>
                      <Typography
                        variant='h5'
                        fontSize={{ xs: '16px', md: '1.5rem' }}
                      >
                        {item?.title}
                      </Typography>
                    </Stack>
                  </Fragment>
                )}
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: '0 16px 16px 16px',
                }}
              >
                {accordioncontant ? (
                  accordioncontant(item)
                ) : (
                  <Stack direction={'row'}>
                    <Stack minWidth={{ xs: 32, md: 56 }}></Stack>
                    <Stack
                      direction={'row'}
                      // gap={{ xs: 1.75, md: 3 }}
                      alignItems={'center'}
                      // ml={{ xs: '15px', md: '16.0625rem' }}
                    >
                      <Typography
                        variant='h6'
                        fontSize={{ xs: '14px', md: 'inherit' }}
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
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AccordionComponent;
