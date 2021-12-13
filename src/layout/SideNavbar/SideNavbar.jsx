import React, { useContext, useState } from 'react';
import { NavLink } from '../../atom/Link';
import { StyledNavbarWrapper, SideNavItem } from './SideNavbar.style';
import { SideNavbarContext } from '../../context/SideNavbarProvider';
import { Authenticated, NotAuthenticated } from '../Header/AuthStatus';
import { Container } from '../../shared/Flexi';
import useSizes from '../../hooks/useSizes';
import ThemeButton from '../Header/ThemeButton';

const SideNavbar = () => {
  const { show } = useContext(SideNavbarContext);
  const { isMedium } = useSizes();
  const [isLogin, setIsLogin] = useState(true);

  if(isMedium) return null;

  return (
    <StyledNavbarWrapper show={show}>
      <Container>
        <NotAuthenticated isLogin={isLogin}>
          <SideNavItem>
            <NavLink to="/find-book">
              Find a book
            </NavLink>
          </SideNavItem>
          <SideNavItem>
            <NavLink to="/sign-in">
              Sign in
            </NavLink>
          </SideNavItem>
          <SideNavItem>
            <NavLink to="/sign-up">
              Sign up
            </NavLink>
          </SideNavItem>
        </NotAuthenticated>

        <Authenticated isLogin={isLogin}>
          <SideNavItem>
            <NavLink to="/add-book">
              Add book
            </NavLink>
          </SideNavItem>
          <SideNavItem>
            <NavLink to="/find-book">
              Find a book
            </NavLink>
          </SideNavItem>
          <SideNavItem>
            <NavLink to="/stats">
              Stats
            </NavLink>
          </SideNavItem>
          <SideNavItem>
            <NavLink to="/profile">
              Profile
            </NavLink>
          </SideNavItem>
        </Authenticated>

        <ThemeButton />
      </Container>
    </StyledNavbarWrapper>
  );
};

export default SideNavbar;
