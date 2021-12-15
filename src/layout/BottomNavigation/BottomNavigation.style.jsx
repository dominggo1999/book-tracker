import tw, { styled } from 'twin.macro';

export const BottomNavigationWrapper = styled.div`
  ${tw`
    fixed 
    z-[1000]
    bottom-0 
    w-full 
    bg-blue 
    rounded-t-3xl
  `}

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Navigation = styled.ul`
  ${tw`
    py-1 
    flex 
  `}
`;

export const NavItem = styled.li`
  ${tw`
    w-1/5 
    text-2xl 
    text-primary
  `}

  a {
    ${tw`
      w-full 
      h-full 
      flex 
      items-center 
      justify-center
    `}
  }

  .link-active{
    ${tw`
      text-white 
    `}
  }
`;
