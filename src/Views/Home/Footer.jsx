import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './Footer.css';

export default function Footer(){
    return(
        <React.Fragment>
        <footer className="background">
        <div className="address">
        <h3 style={{color:"red"}}>Get In Touch</h3>
            <li><strong>Address :</strong> 
            251A/13 Block B, Tomar Colony Burari Delhi
            <br/>Pin 110084, Delhi (India)</li>
        </div>   
        <div className="contact">
        <h3 style={{color:"red"}}>Contact Us!</h3>
        <div className="email1" href="mailto:vaidyaacuppressureburari@gmail.com">
            <EmailIcon/> vaidyaacupressureburari@gmail.com 
        </div>
        <div className="phone1">
            <PhoneIcon/> 9871429687, 8882545242
        </div>
        <div className="whatsApp1">
            <WhatsAppIcon /> <a href="https://api.whatsapp.com/send?phone=+919871429687"><span className="text_name">WhatsApp Us!</span></a>
        </div>
        </div>
        </footer>
        <p className="text-footer">
            Copyright &copy; 2020 www.vaidyacupressure.netlify.com - All Rights Reserved
        </p>
        </React.Fragment>
    )
}