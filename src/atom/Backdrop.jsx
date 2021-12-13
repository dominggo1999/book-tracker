import React from 'react';
import tw, { styled } from 'twin.macro';

export const Overlay = styled.div`
  ${tw`
    fixed 
    w-full
    h-screen
    left-0
    top-0
  `}
  
  ${({ transparent }) => (transparent ? tw`bg-transparent` : tw`bg-black  opacity-50`)}

  z-index: 888;
`;

const Backdrop = ({
  children, open, handleClose, transparent,
}) => {
  if(!open)return null;

  return (
    <Overlay
      transparent
      onClick={handleClose}
    >
      {children}
    </Overlay>
  );
};

export default Backdrop;
