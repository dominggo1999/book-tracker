import tw, { styled } from 'twin.macro';

export const Groups = styled.div`
  ${tw`
     flex 
     flex-col 
     gap-y-10
  `}
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
  `}
`;

export const Title = styled.div`
  ${tw`
    font-header 
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

export const BookCard = styled.div`
  ${tw`
    w-full 
  `}

  img{
    ${tw`
      w-full
    `}
  }
`;
