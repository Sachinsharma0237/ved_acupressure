
import { Button } from '@mui/material';
import React from 'react'
import './HomeImage.css';

export default function HomeImage(){
    return(
        <div>
            <img className='home_img' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/female-instructor-with-yoga-class-in-the-gym-royalty-free-image-700718696-1561407106.jpg?crop=1.00xw:0.752xh;0,0.238xh&resize=1200:*" alt=""></img>
            <div className="details">
                <p className="text-big"><span style={{color:"red"}} >वैद्य-</span> Acupressure <span>&</span> Yoga Centre in Delhi</p>
                <div className="buttons">
                    <Button variant="contained" color="success"><a href="tel:+919871429687">Book Appointment</a></Button>
                </div>
            </div>
        </div>
    );
}