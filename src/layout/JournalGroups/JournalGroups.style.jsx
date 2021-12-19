import tw, { styled } from 'twin.macro';
import { gap } from '../../util/polyfillGap';

export const Groups = styled.div`
  ${tw` 
    flex 
    flex-col 
  `}

  ${gap(0, 10)}
`;

export const GroupItem = styled.div`
  ${tw`
    
  `}
`;

export const GroupHeader = styled.div`
  ${tw`
    flex 
    justify-between 
    items-center 
    mb-5
  `}
`;

export const Title = styled.div`
  ${tw`
    text-2xl 
    font-bold 
    text-primary   
    dark:text-blue
  `}
`;

export const SeeMoreButton = styled.button`
  ${tw`
    text-primary 
    dark:text-blue
    text-lg
  `}
`;

// Carousel/Swiper

export const GroupContentWrapper = styled.div`
  ${tw`
    mt-2
  `}
`;
