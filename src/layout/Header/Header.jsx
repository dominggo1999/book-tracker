import React, { useContext, useState, useRef } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { BsLightningCharge } from 'react-icons/bs';
import { Container } from '../../shared/Flexi';
import {
  HeaderWrapper,
  Brand,
  Navigation,
  NavItem,
  ThemeButton,
  Circle,
  Avatar,
} from './Header.style';
import Link, { NavLink } from '../../atom/Link';
import { ThemeContext } from '../../context/ThemeProvider';
import useSizes from '../../hooks/useSizes';
import UserMenu from './UserMenu';
import useClickOutside from '../../hooks/useClickOutside';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [clicked, setClicked] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef();
  const avatarRef = useRef();

  const Icon = theme === 'dark' ? BsLightningCharge : MdOutlineDarkMode;

  const { isMedium } = useSizes();

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
    <HeaderWrapper>
      <Container>
        <HeaderWrapper>
          <Brand>
            <Link to="/">
              Book Tracker
            </Link>
          </Brand>
          {
            isMedium && (
              <Navigation>
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

                {/* <ThemeButton
                  clicked={clicked}
                  onClick={changeTheme}
                >
                  <Circle>
                    <Icon />
                  </Circle>
                </ThemeButton> */}

                <Avatar
                  ref={avatarRef}
                  onClick={toggleUserMenu}
                >
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2F2b67%2Ff%2F2009%2F273%2F1%2F5%2Fsenjougahara_by_archiemouse.jpg&f=1&nofb=1"
                    alt="Senjougahara"
                  />
                </Avatar>

                {
                  showUserMenu && (
                    <UserMenu
                      clicked={clicked}
                      changeTheme={changeTheme}
                      icon={Icon}
                      ref={menuRef}
                      closeUserMenu={closeUserMenu}
                    />
                  )
                }
              </Navigation>
            )
          }
        </HeaderWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
