import tw, { styled } from 'twin.macro';

export const StyledAvatar = styled.button`
  ${tw`
    w-[32px] 
    h-[32px]
    rounded-full 
    overflow-hidden  
    flex
    items-center 
    justify-center 
    bg-primary 
    text-blue
  `}

  svg{
    ${tw`
      w-full 
      h-full 
      pointer-events-none
    `}
  }
`;
