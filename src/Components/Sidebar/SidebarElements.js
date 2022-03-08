import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SidebarContent = styled.aside`
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 350px;
    background: #ffc500;
    transition: .3s ease-in-out;
    top: 0;
    display: grid;
    align-items: center;
    right: ${({ isOpen }) => (isOpen ? '0px' : '-1000px')};
    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
export const CloseIcon = styled(FaTimes)`
    color: #000;
`;
export const SidebarMenu = styled.div`
    display: grid;
    grid-template-column: 1fr;
    grid-template-row: repeat(3, 80px);
    align-items: center;
    @media screen and (max-width: 480px) {
        grid-template-row: repeat(3, 60px);
    }
`;
export const SidebarLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    list-style-type: none;
    color: #000;
    transition: .2s ease-in-out;
    font-size: 1.5rem;
    margin-bottom: 20px;
    &:hover {
        color: #e31837;
        transition: .2s ease-in-out;
        cursor: pointer;
    }
`;
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;
export const SidebarRoute = styled(Link)`
    background: #e31837;
    white-space: nowrap;
    padding: 16px 64px;
    border: none;
    outline: none;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    transition: .2s ease-in-out;
    &:hover {
        cursor: pointer;
        background: #fff;
        transition: .2s ease-in-out;
        color: #010606;
    }
`;
