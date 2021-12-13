import React, { forwardRef } from 'react';
import Link from '../../atom/Link';
import {
  DropownMenu,
  ThemeButton,
  Circle,
  DropdownItem,
} from './Header.style';

const UserMenu = forwardRef(({
  clicked,
  changeTheme,
  icon: Icon,
  closeUserMenu,
}, ref) => {
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
      <ThemeButton
        clicked={clicked}
        onClick={changeTheme}
      >
        <Circle>
          <Icon />
        </Circle>
      </ThemeButton>
    </DropownMenu>
  );
});

export default UserMenu;
