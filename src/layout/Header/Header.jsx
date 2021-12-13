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

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [clicked, setClicked] = useState(false);

  const Icon = theme === 'dark' ? BsLightningCharge : MdOutlineDarkMode;

  const changeTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    });
    setClicked(true);
  };

  console.log(clicked);

  return (
    <HeaderWrapper>
      <Container>
        <HeaderWrapper>
          <Brand>
            <Link to="/">
              Book Tracker
            </Link>
          </Brand>
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
        </HeaderWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
