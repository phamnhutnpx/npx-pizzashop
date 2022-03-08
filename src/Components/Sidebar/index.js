import React from 'react'
import { Icon, SidebarContent, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, handleToggleSidebar }) => {

    return (
        <SidebarContent isOpen={isOpen} >
            <Icon onClick={handleToggleSidebar}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Pizzas</SidebarLink>
                <SidebarLink to='/'>Dessert</SidebarLink>
                <SidebarLink to='/'>Full menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContent>
    )
}

export default Sidebar