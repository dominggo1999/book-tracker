import tw, { styled } from 'twin.macro';
import { colors } from '../../constants/colors';

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
    font-content 
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
 
    bg-primary 
    text-blue  
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

  ${Circle} {
    transition : ${({ clicked }) => clicked && 'left ease-in-out 150ms'} ;
  }
`;
