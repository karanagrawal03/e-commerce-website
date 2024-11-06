import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
   <MainHeader>
    <NavLink to="/">
        <img src='../images/logo.png' alt='logo'/>
    </NavLink>
    <Nav/>
   </MainHeader>
  )
}

export default Header

const MainHeader = styled.header` 
 padding: 20px;
 height: 10rem;
 background-color:${({theme})=>theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
.logo{
 height: 5rem;
}
@media (max-width:${({theme})=>theme.media.mobile}) { 
} 
`;