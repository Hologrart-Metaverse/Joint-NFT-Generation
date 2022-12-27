import React, { useState } from 'react';
import "./footer.css";


import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FaDiscord } from 'react-icons/fa';

import SendIcon from '@mui/icons-material/Send';

import hologrart from "../../assets/hologrartLogo.png";

const Footer = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [joinEmail, setJoinEmail] = useState("");


  return (
    <div className='footer'>
      <div className='container footer-content'>

        <div className='footer_top'>
          
          <div className='footer_top_firstColon'>
            
            <div className='footer_top_firstColon_header'>
              <img className='footer_top_firstColon_header_image' src={hologrart} />
              <h2>Hologrart</h2>
            </div>
            
            <div className='footer_top_firstColon_desc'>
              <p>Hologrart, metaverse için Web3 altyapısı ve blockchain ile geliştirilen; kültür, sanat, eğlencede NFT odaklı ve bazı stratejik sektörlerde blockchain tabanlı finans kullanarak iş süreç çözümlerine odaklanan bir girişimdir.</p>
            </div>

            <div className='footer_top_firstColon_links'>
              <div className='footer_top_firstColon_links_icon'><InstagramIcon/></div>
              <div className='footer_top_firstColon_links_icon'><TwitterIcon/></div>
              <div className='footer_top_firstColon_links_icon'><LinkedInIcon/></div>
              <div className='footer_top_firstColon_links_icon'><FacebookIcon/></div>
              <div className='footer_top_firstColon_links_icon'><YouTubeIcon/></div>
              <div style={{fontSize: "21px"}} className='footer_top_firstColon_links_icon'><FaDiscord/></div>
            </div>

          </div>
          
        
          <div className='footer_top_secondColon'>
            <h2>Products</h2>
            <ul className='footer_top_secondColon_list'>
              <li className='footer_top_secondColon_list_item'>Joint NFT Generation</li>
            </ul>
          </div>
          
        
          <div className='footer_top_thirdColon'>
            <h2>Contact Us</h2>

            <div className='footer_top_thirdColon_contacts'>
              <div className='footer_top_thirdColon_contacts_address'>
                <p><span><BusinessIcon style={{fontSize:"20px"}}/> Address:</span> Adalet, Manas Blv. Yanyolu Folkart Towers No:47, 35530 Bayraklı/İzmir</p>
              </div>

              <div className='footer_top_thirdColon_contacts_email'>
                <p><span><EmailIcon style={{fontSize:"20px"}}/> Email:</span> info@hologrart.com</p>
              </div>

              <div className='footer_top_thirdColon_contacts_phone'>
                <p><span><PhoneIcon style={{fontSize:"20px"}}/> Phone:</span> +90 (507) 008 02 77 </p>
              </div>

              <div className='footer_top_thirdColon_contacts_dm'>
                <h3>Direct Message</h3>
                <div className='footer_top_thirdColon_contacts_dm_form'>
                  <input className='footer_top_thirdColon_contacts_dm_form_input' type="text" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
                  <textarea className='footer_top_thirdColon_contacts_dm_form_text' value={message} placeholder="Message..." onChange={e => setMessage(e.target.value)} />
                  <div className='footer_top_thirdColon_contacts_dm_form_send'>
                    <button className='footer_top_thirdColon_contacts_dm_form_send_button'>Send <SendIcon style={{marginLeft: "5px"}}/></button>
                    <div className='footer_top_thirdColon_contacts_dm_form_send_hover'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          <div className='footer_top_fourthColon'>
            <h2>Join Us</h2>
            <p>Hey! Why don't you join us? We are develop our world and earn money in our Metaverse. Let's join us and have fun together.</p>
            <div className='footer_top_fourthColon_form'>
              <input className='footer_top_fourthColon_form_input' type="text" placeholder='Email' value={joinEmail} onChange={e => setJoinEmail(e.target.value)} />
              <a className='footer_top_fourthColon_form_register'>register</a>
            </div>
          </div>
        
        </div>
        <br/>
        <hr style={{width: "90%"}}/> 
          <center>
            <div className='footer_bottom'>
                <p>Terms of use | Privacy Policy</p>
                <p>Copyright © 2022 Hologrart Metaverse. All Rights Reserved.</p>
            </div>
          </center>
      </div>
    </div>
  )
}

export default Footer