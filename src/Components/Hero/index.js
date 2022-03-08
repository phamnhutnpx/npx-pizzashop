import React, { useState } from 'react'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroH1, HeroItems, HeroP, HeroBtn } from './HeroElements';

function Hero() {
    const [isOpen, setIsOpen] = useState({});
    // toggle menu
    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    return (
        <HeroContainer>
            <Navbar handleToggleSidebar={handleToggleSidebar} />
            <Sidebar isOpen={isOpen} handleToggleSidebar={handleToggleSidebar} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero