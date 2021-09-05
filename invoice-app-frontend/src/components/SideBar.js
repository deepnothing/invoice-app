import React from 'react'
import Moon from '../assets/icon-moon.svg';
import Logo from '../assets/logo.svg';
import User from '../assets/image-avatar.jpg';

import { LogoWrapper, Logos, MoonButton, Divider, Wrapper, UserPic, SideBar } from '../styles';

export const SidePanel = (props) => {
    return (
        <SideBar>
            <LogoWrapper>
                <Logos src={Logo} />
            </LogoWrapper>

            <Wrapper>
                <MoonButton onClick={props.themeToggle}>
                    <img src={Moon} alt="theme" />
                </MoonButton>
                <Divider />
                <UserPic src={User} />
            </Wrapper>
        </SideBar>
    )
}