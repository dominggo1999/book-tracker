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

export const BookCard = styled.div`
  ${tw`
    w-full  
    select-none 
  `} 
  
  span{
    ${tw`
      w-full 
    `}
  }

  img{
    ${tw`
      w-full 
      min-h-[240px]
      h-[240px] 
      object-cover 
      object-center 
      mb-2 
      rounded-lg
    `}
  }
`;

export const CardTitle = styled.h2`
  ${tw`
    font-bold 
    text-primary 
    dark:text-blue 
  `}
`;

export const Author = styled.p`
  ${tw`
    text-sm 
    dark:text-white  
    text-gray 
  `}
`;

export const PercentageBar = styled.div`
  ${tw` 
    mt-2
    relative 
    w-full 
    h-[3px] 
    rounded-full
  `}

  background :${({ dark }) => (dark ? '#d0d1d534' : '#d0d1d5e2')} ;
`;

export const ProgressIndicator = styled.div`
  ${tw`
    absolute 
    top-0 
    left-0  
    bg-blue 
    h-full
    z-[50]
  `}

  width : ${({ width }) => width}%;
`;

export const ProgressNumber = styled.p`
  ${tw` 
    relative
    mt-2
    text-lg
    text-primary 
    dark:text-blue
  `} 
`;
