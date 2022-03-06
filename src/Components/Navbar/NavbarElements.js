import styled from "styled-components";
import { NavLink as Link } from "react-router-dom"

export const Nav = styled.nav`
    background: red;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;
export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;
export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;
`;