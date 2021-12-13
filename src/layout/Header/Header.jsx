import React, { useContext, useState, useRef } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { BsLightningCharge } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import { Container } from '../../shared/Flexi';
import {
  HeaderWrapper,
  Brand,
  Navigation,
  NavItem,
  Avatar,
  MenuIcon,
  Wrapper,
} from './Header.style';
import Link, { NavLink } from '../../atom/Link';
import { ThemeContext } from '../../context/ThemeProvider';
import useSizes, { Medium } from '../../hooks/useSizes';
import UserMenu from './UserMenu';
import useClickOutside from '../../hooks/useClickOutside';
import { SideNavbarContext } from '../../context/SideNavbarProvider';
import ThemeButton from './ThemeButton';
import { Authenticated, NotAuthenticated } from './AuthStatus';

const BelowMedium = ({ children }) => {
  const { isMedium } = useSizes();

  return !isMedium ? children : null;
};

const Header = () => {
  // Side navbar
  const { show, toggle } = useContext(SideNavbarContext) || {};

  const { theme, setTheme } = useContext(ThemeContext) || {};
  const [clicked, setClicked] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const menuRef = useRef();
  const avatarRef = useRef();

  const changeTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    });
    setClicked(true);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const closeUserMenu = (e) => {
    // If avatar is clicked dont trigger useClickOutside
    e.target !== avatarRef.current && setShowUserMenu(false);
  };

  useClickOutside(menuRef, closeUserMenu);

  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          {/* Click handler just for testing purpose */}
          <Brand onClick={() => setIsLogin(!isLogin)}>
            <Link to="/">
              Book Tracker
            </Link>
          </Brand>

          <BelowMedium>
            <MenuIcon onClick={toggle}>
              {
                show ? <GrFormClose /> : <BiMenuAltRight />
              }
            </MenuIcon>
          </BelowMedium>

          <Medium>
            <Navigation>
              <NotAuthenticated isLogin={isLogin}>
                <NavItem>
                  <NavLink to="/find-book">
                    Find a book
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/sign-in">
                    Sign In
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/sign-up">
                    Sign Up
                  </NavLink>
                </NavItem>
                <ThemeButton />
              </NotAuthenticated>

              <Authenticated isLogin={isLogin}>
                <NavItem>
                  <NavLink to="/add-book">
                    Add Book
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/find-book">
                    Find a book
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/stats">
                    Stats
                  </NavLink>
                </NavItem>

                <Avatar
                  ref={avatarRef}
                  onClick={toggleUserMenu}
                >
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2F2b67%2Ff%2F2009%2F273%2F1%2F5%2Fsenjougahara_by_archiemouse.jpg&f=1&nofb=1"
                    alt="Senjougahara"
                  />
                </Avatar>

                <UserMenu
                  changeTheme={changeTheme}
                  ref={menuRef}
                  showUserMenu={showUserMenu}
                  closeUserMenu={closeUserMenu}
                />
              </Authenticated>
            </Navigation>
          </Medium>
        </HeaderWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
