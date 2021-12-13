import tw, { styled } from 'twin.macro';
import { colors } from '../../constants/colors';

export const StyledNavbarWrapper = styled.div`
  ${tw`
    top-0
    right-0
    fixed 
    w-full
    h-screen
    bg-blue
    translate-x-full
    py-20
  `}

  ${({ show }) => show && tw`translate-x-0`}
  transition : transform ease-in-out 300ms;
`;

export const SideNavItem = styled.div`
  ${tw`
    font-bold 
    text-primary
    mb-4 
  `}

  a {
    background-image: linear-gradient(${colors.primary}, ${colors.primary});
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: 0% 4px;
    transition: all 250ms;
    padding-bottom : 4px;
    
    &.link-active {
      background-size: 100% 4px;
    } 
  }
`;
