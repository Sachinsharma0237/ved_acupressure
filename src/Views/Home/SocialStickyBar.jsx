import { Button } from '@mui/material';
import React from 'react'
import './SocialStickyBar.css';

export default function SocialStickyBar(){

    return(
        <React.Fragment>
            <div class="icon-bar">
                <a href="https://www.facebook.com/profile.php?id=100001063145745" class="facebook"><i class="fa fa-facebook"></i></a> 
                <a href="https://twitter.com/Vaidyaburari?t=n_M-yEpTsME3LriQ5CdKEw&s=09" class="twitter"><i class="fa fa-twitter"></i></a> 
                <a href="mailto:vaidyaacuppressureburari@gmail.com" class="google"><i class="fa fa-google"></i></a> 
                <a href="http://www.instagram.com/sharma_9871429687" class="linkedin"><i class="fa fa-instagram"></i></a>
                <a href="https://youtube.com/channel/UCNi2VkAMG3kXkzs93EEMqSw" class="youtube"><i class="fa fa-youtube"></i></a> 
            </div>
        </React.Fragment>
        
    )
}