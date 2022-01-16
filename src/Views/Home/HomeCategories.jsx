import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import { Typography } from '@material-ui/core';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6TCtyKgjLjFCmGhyWagB3v51_kfEBgfwRg&usqp=CAU',
    title: 'Cup Therapy',
    width: '40%',
  },
  {
    url: 'https://admin.lidsen.com/uploads/specialImgs/2019-11-27/5dde375690359.jpg',
    title: 'Auricular Therapy',
    width: '20%',
  },
  {
    url: 'https://www.jagranimages.com/images/25_05_2019-sujok_19253515.jpg',
    title: 'Sujok Therapy',
    width: '40%',
  },
  {
    url: 'https://www.wearegurgaon.com/wp-content/uploads/2018/04/best-yoga-studios-in-gurgaon.jpg',
    title: 'Yoga Classes',
    width: '38%',
  },
  {
    url: 'https://ameridisability.com/wp-content/uploads/2021/06/5d485dab80adb77320da4513_Photo20courtesy20of20YogART202-color20therapy20min.png',
    title: 'Color Therapy',
    width: '38%',
  },
  {
    url: 'https://cf.ltkcdn.net/horoscopes/images/orig/234962-1600x1030-magnet-therapy-methods-weight-loss.jpg',
    title: 'Magnet Therapy',
    width: '24%',
  },
  {
    url: 'https://dwvyw8kf1avne.cloudfront.net/s3fs-public/inline-images/iStock-1186228259.jpg',
    title: 'Acupressure Therapy',
    width: '40%',
  },
  {
    url: 'https://5.imimg.com/data5/XB/MJ/GLADMIN-24081721/panchakarma-ayurveda-treatment-500x500.jpg',
    title: 'Ayurvedic Panchkarma',
    width: '20%',
  },
  {
    url: 'http://www.indiareikifoundation.com/wp-content/uploads/2020/01/crystal-healing-jpg-495x400.jpg',
    title: 'Reiki Healing',
    width: '40%',
  },
];

export default function HomeCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        SERVICES WE PROVIDE
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
