import React from 'react';
import { FooterContent, SocialMedia, LinkIcon, LinkLogo } from "./FooterElements";

const Footer = () => {
    return (
        <FooterContent>
            <LinkLogo to='/' >
                Pizza
            </LinkLogo>
            <SocialMedia>
                <LinkIcon to='/' >
                    <img src='https://banner2.cleanpng.com/20180409/raw/kisspng-computer-icons-facebook-social-media-f-5acb61d524ed51.8890429215232782931513.jpg' />
                </LinkIcon>
                <LinkIcon to='/' >
                    <img src='https://e7.pngegg.com/pngimages/730/864/png-clipart-instagram-logo-computer-icons-insta-logo-text-computer-icons-thumbnail.png' />
                </LinkIcon>
                <LinkIcon to='/' >
                    <img src='https://pnggrid.com/wp-content/uploads/2021/07/White-YouTube-Logo-Transparent.png' />
                </LinkIcon>
                <LinkIcon to='/' >
                    <img src='https://png.pngitem.com/pimgs/s/108-1081070_twitter-twitter-white-logo-png-transparent-png.png' />
                </LinkIcon>
                <LinkIcon to='/' >
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBQxoWjOf4KmRAF0aX2HrTTfoAuEUVL1HyGtwTD6pFfk3AiMaJUiFZtngGj7BHEQPpVY&usqp=CAU' />
                </LinkIcon>
            </SocialMedia>
        </FooterContent>
    )
}

export default Footer;