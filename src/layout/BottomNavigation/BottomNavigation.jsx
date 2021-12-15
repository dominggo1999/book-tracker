import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { IoIosStats } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import {
  BottomNavigationWrapper,
  Navigation,
  NavItem,
} from './BottomNavigation.style';
import { NavLink } from '../../atom/Link';
import { Container } from '../../shared/Flexi';

const BottomNavigation = () => {
  return (
    <BottomNavigationWrapper>
      <Container>
        <Navigation>
          <NavItem>
            <NavLink
              exact
              to="/"
            >
              <AiFillHome />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/find-book">
              <FaSearch />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/add-book">
              <FaPlus />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/stats">
              <IoIosStats />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile">
              <CgProfile />
            </NavLink>
          </NavItem>
        </Navigation>
      </Container>
    </BottomNavigationWrapper>
  );
};

export default BottomNavigation;
