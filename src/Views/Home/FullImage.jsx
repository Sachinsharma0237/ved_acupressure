import { Button } from '@mui/material';
import React from 'react'
import './image.css';

export default function FullImage(){
    return(
        <div class="container">
        <img src="https://wallpapercave.com/wp/wp5540043.jpg" alt="Avatar" class="image" style={{width:"100%"}}/>
        <div class="middle">
            <Button class="text">BOOK APPOINTMENT</Button>
        </div>
        </div>
    )
}