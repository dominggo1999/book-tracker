import tw, { styled } from 'twin.macro';
import { colors } from '../../constants/colors';

export const Wrapper = styled.div`
  ${tw`
    w-full 
    bg-blue 
    relative   
    z-[9999]
  `}
`;

export const HeaderWrapper = styled.nav`
  ${tw`
    bg-blue 
    flex 
    justify-between 
    items-center
    text-primary 
    h-full 
  `}
`;

export const Brand = styled.div`
  ${tw`
    text-2xl  
    font-bold 
  `}
`;

export const Navigation = styled.ul`
  ${tw`
    flex  
    items-center
    gap-10 
    h-[2rem]
  `}
`;

export const NavItem = styled.li`
  ${tw`
    font-bold  
    flex 
    items-center 
    h-full
  `}

  a {
    background-image: linear-gradient(${colors.primary}, ${colors.primary});
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: 0% 3px;
    transition: all 250ms;
    
    &.link-active {
      background-size: 100% 3px;
    } 
  }
`;

export const Circle = styled.div`
  ${tw`
    absolute 
    w-[25px]
    h-[25px] 
    rounded-full 
    
    flex 
    items-center 
    justify-center

    text-white  
    translate-y-[-50%] 
    top-[50%]
    dark:(left-[20px])
    left-[1px] 
  `} 
`;

export const ThemeButton = styled.button`
  ${tw`
    min-w-[50px] 
    h-[30px] 
    rounded-full 
    border-2 
    border-primary  
    relative  
    outline-none 
  `} 

  ${({ dark }) => dark && tw`border-blue`}

  ${Circle} {
    transition : ${({ clicked }) => clicked && 'left ease-in-out 150ms'} ;

    ${({ dark }) => (dark ? tw`bg-blue text-primary` : tw`bg-primary`)}
  }
`;

export const Avatar = styled.button`
  ${tw`
    w-[32px] 
    h-[32px]
    rounded-full 
    overflow-hidden 
  `}

  img{
    ${tw` 
      pointer-events-none
      w-full 
      h-full
      object-cover 
      object-center
    `}
  }
`;

export const DropownMenu = styled.div`
  ${tw` 
    select-none
    absolute 
    top-full 
    right-0 
    w-[150px]
    mt-1 
    bg-blue 
    text-primary 
    py-4
    text-right 
    rounded-lg 
  `} 

  ${ThemeButton}{
    ${tw`
      mt-2 
      mx-4
    `}
  }
`;

export const DropdownItem = styled.div`
  ${tw`
    py-1 
    px-4
    hover:text-white
  `}

  button, a {
    ${tw`
      font-bold
      w-full 
      justify-end
      inline-flex
    `}
  }
`;

export const MenuIcon = styled.button`
  ${tw`
    text-4xl 
    z-[9999]
    bg-blue 
    rounded-full 
    w-[40px] 
    h-[40px]
  `}
`;
