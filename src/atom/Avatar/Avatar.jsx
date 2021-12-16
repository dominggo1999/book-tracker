import React, { forwardRef } from 'react';
import { CgProfile } from 'react-icons/cg';
import { StyledAvatar } from './Avatar.style';

const Avatar = forwardRef((props, ref) => {
  const {
    ...rest
  } = props;

  return (
    <StyledAvatar
      {...rest}
      ref={ref}
    >
      <CgProfile />
    </StyledAvatar>
  );
});

export default Avatar;
