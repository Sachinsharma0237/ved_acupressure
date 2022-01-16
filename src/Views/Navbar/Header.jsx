import React from 'react'
import './Header.css'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Button from '@mui/material/Button';

export default function Header(){
    return(
        <div className='strip'>
             <div className="contact-details">
                 <div className="email">
                  <EmailIcon/> sachinsharma0237@gmail.com 
                 </div>
                 <div className="phone">
                 <PhoneIcon/> 9871429687, 8882545242
                 </div>
                 <div className="whatsApp">
                <WhatsAppIcon /> <a href="https://api.whatsapp.com/send?phone=+919871429687"><span className="text_name">WhatsApp Us!</span></a>
                 </div>
                 <Button color="success" variant="outlined" href="#contained-buttons" style={{marginTop: "8px"}}>
                    Book Appointment
                 </Button>
             </div>
        </div>
    )
}