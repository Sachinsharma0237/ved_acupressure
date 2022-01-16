import { Typography } from '@material-ui/core';
import React from 'react'
import Button from '../../components/Button';
import HomeLayout from './HomeLayout';

//https://wallpaperbat.com/img/218365-yoga-background-wallpaper.jpg
//https://i.pinimg.com/originals/d0/70/57/d07057d1af34fb96fea63cb2dd4f109b.jpg
//https://i.pinimg.com/originals/4f/18/47/4f1847aff866675334ff2baaf5f3cae3.jpg
//https://wallpaperaccess.com/full/654501.jpg
//https://wallpaperbat.com/img/191660-download-wallpaper-2560x1440-meditation-yoga-silhouette-palm.jpg

const backgroundImage =
  'https://i.pinimg.com/originals/d0/70/57/d07057d1af34fb96fea63cb2dd4f109b.jpg';

export default function HomeData(){

  return (
    <HomeLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center" style={{fontWeight: 800}}>
        Upgrade your Life
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Get fit and pain free without medicine and drugs.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Book Appointment
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </HomeLayout>
  )
}