import React from 'react'
import HomeCategories from '../Home/HomeCategories';
import './About.css';
import { Typography } from '@material-ui/core';

export default function About(){

    return(
        <React.Fragment>
            <Typography variant="h4" marked="center" align="center" component="h2">
                    WHO WE ARE?
            </Typography>
            <div className="data_abt" style={{background:"beige"}}>
            <div className="about_data">
                <img className='image_about' src="https://lh3.googleusercontent.com/ZQhZ20iEtb9ZmbEto2YLDDUVaoLGoaGWkpu7909ZEKzbIIhBZphHsKUbvOLtW8sj6Qmyt77r2Rx3_U55-dD7cRU=s800" alt="" />
                <img className='image_about' src="https://images.squarespace-cdn.com/content/v1/5d1d73854d6d790001242ecd/1613642141861-HJ0CDGS010TW9BYC66OV/two-wander-tools-for-accupressure?format=1000w" alt="" />
                <img className='image_about' src="https://d3b3by4navws1f.cloudfront.net/200477066.jpg" alt="" />
            </div>
                <p className="para">Centered at Delhi, वैद्य Acupressure and Yoga Centre is one of the leading acupressure centre 
                engaged in providing qualitative acupressure services for a number of problems of the body. 
                Our services are based on the ancient healing art which involves the pressing the key healing 
                points of the body in order to get relief from a problem. We offer our acupressure services to a 
                number of problems of a human body. Acupressure therapy is a healing art which possess self-curative 
                abilities in it. The acupressure services we provide in our clinic are very effective for the ailments 
                which are directly or indirectly related to stress and anxiety. The acupressure treatment of our clinic 
                is effective in improving an immunes system of a human body thereby providing ultimate results by releasing 
                the tension; increases blood circulation and reducing the pain whatsoever. We have a vast domain expertise in 
                providing best acupressure services to our patients who are suffering from one disorder or the other.</p>
            </div>
            <HomeCategories/>
        </React.Fragment>
    )
}