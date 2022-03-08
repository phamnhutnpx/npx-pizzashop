import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContent = styled.div`
    height: 70px;
    background: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    

`;
export const LinkLogo = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.5rem;
`;
export const LinkIcon = styled(Link)`
    img{
        height: 20px;
        width: 20px;
        border-radius: 20px;
        color: #fff;
        background: fff;
        margin: 0 4px;
    }
`;
export const SocialMedia = styled.div`
    
`;