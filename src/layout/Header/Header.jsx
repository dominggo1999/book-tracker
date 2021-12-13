import React, { useContext, useState } from 'react';
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
} from './Header.style';
import Link, { NavLink } from '../../atom/Link';
import { ThemeContext } from '../../context/ThemeProvider';
import useSizes from '../../hooks/useSizes';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [clicked, setClicked] = useState(false);

  const Icon = theme === 'dark' ? BsLightningCharge : MdOutlineDarkMode;

  const { isMedium } = useSizes();

  const changeTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    });
    setClicked(true);
  };

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
                  <NavLink to="/stats">
                    Stats
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/find-book">
                    Find a book
                  </NavLink>
                </NavItem>
                <ThemeButton
                  clicked={clicked}
                  onClick={changeTheme}
                >
                  <Circle>
                    <Icon />
                  </Circle>
                </ThemeButton>
              </Navigation>
            )
          }
        </HeaderWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
