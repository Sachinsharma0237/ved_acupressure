import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@material-ui/core';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

export default function HomeGrid() {
  return (
    <Box style={{backgroundColor:"white"}}
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="https://mui.com/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                The Best Yoga Center
              </Typography>
              <Typography variant="h5">
                {
                  'Male & female personal yoga instructor are also available'
                }

                {
                  ', Drugs free treatment is now available at your doorstep'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues2.svg"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                New Experiences
              </Typography>
              <Typography variant="h5">
                {
                  'Experience new therepies and treatment using acupressure and acupunture science '
                }

                {'and your health will be great!'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues3.svg"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Exclusive Prices
              </Typography>
              <Typography variant="h5">
                {'Prices for the treament, therapies and yoga is lowest in ncr of delhi'}
                {',that you will not find anywhere else.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

