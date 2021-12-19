import tw, { styled } from 'twin.macro';

export const SideStatsSection = styled.section`
  ${tw`
    flex 
    flex-col 
    gap-5
  `}
`;

export const Border = styled.div`
  ${tw`
    border-2
    border-blue 
    rounded-3xl
  `}
`;

export const Block = styled.div`
  ${tw`
    rounded-3xl 
    p-5 
    flex 
    flex-col 
    relative 
    gap-y-10
  `}

  a{
    ${tw`
      text-right
    `}
  }
`;

export const Sub = styled.div`
  ${tw`
    flex 
    flex-col 
  `}
`;

export const SubHeader = styled.p`
  ${tw`
    text-2xl 
    text-primary  
    dark:text-blue
    font-bold  
    mb-2 
  `}
`;

export const StatsItem = styled.p`
  ${tw` 
    text-primary  
    dark:text-white
  `}
`;

export const StatsNumber = styled.span`
  ${tw`
    font-semibold  
    dark:text-blue
    text-xl
  `}
`;

export const StatsRating = styled.div`
  ${tw`
    flex 
    items-center 
    text-primary 
    dark:text-white 
    gap-1
  `} 

  ${StatsNumber} {
    ${tw`
      mr-1
    `}
  }

  svg{
    ${tw`
      text-yellow 
      text-2xl
    `}
  }
`;

export const DetailsButton = styled.button`
  ${tw`  
    bg-blue 
    hover:bg-blueHover 
    px-3 
    py-1 
    rounded-full
  `}
`;

export const BlockIcon = styled.div`
  ${tw`
    absolute 
    rounded-full 
    w-[50px] 
    h-[50px] 
    flex 
    items-center
    justify-center 
    text-3xl 
    right-2 
    top-2 
    border-2
    border-blue 
    text-blue 
  `}
`;

export const Quote = styled.p`
  ${tw`
    text-primary 
    dark:text-white
    mt-2
    mb-4  
    flex
  `}
`;

export const Author = styled.p`
  ${tw`
    text-right 
    dark:text-blue 
    text-primary
    font-semibold
  `}
`;
