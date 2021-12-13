import React, { forwardRef } from 'react';
import Link from '../../atom/Link';
import {
  DropownMenu,
  Circle,
  DropdownItem,
} from './Header.style';
import ThemeButton from './ThemeButton';

const UserMenu = forwardRef(({
  closeUserMenu,
  showUserMenu,
}, ref) => {
  if(!showUserMenu) return null;

  return (
    <DropownMenu ref={ref}>
      <DropdownItem onClick={closeUserMenu}>
        <Link to="/profile">
          Profile
        </Link>
      </DropdownItem>
      <DropdownItem onClick={closeUserMenu}>
        <button>Sign Out</button>
      </DropdownItem>
      <ThemeButton />
    </DropownMenu>
  );
});

export default UserMenu;
