import React, { useRef } from 'react';
import tw, { styled } from 'twin.macro';

export const Overlay = styled.div`
  ${tw`
    fixed 
    w-full
    h-screen
    left-0
    top-0 
    flex 
    items-center 
    justify-center 
  `}
  
  ${({ transparent }) => (transparent ? tw`bg-transparent` : tw`bg-[#0000007a]`)}

  z-index: 10001;
`;

const Backdrop = ({
  children, open, handleClose, transparent,
}) => {
  if(!open)return null;

  const ref = useRef();

  const closeBackdrop = (e) => {
    if(e.target === ref.current) {
      handleClose();
    }
  };

  return (
    <Overlay
      ref={ref}
      transparent={transparent}
      onClick={closeBackdrop}
    >
      {children}
    </Overlay>
  );
};

export default Backdrop;
