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
}, ref) => {
  return (
    <DropownMenu ref={ref}>
      <DropdownItem>
        <Link to="/profile">
          Profile
        </Link>
      </DropdownItem>
      <DropdownItem>
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
