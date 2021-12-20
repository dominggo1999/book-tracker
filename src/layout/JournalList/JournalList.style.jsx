import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`
    flex 
    flex-col
    w-full 
    dark:bg-primary 
    min-h-screen
  `}
`;

export const JournalListHeader = styled.div`
  ${tw`
    flex  
    items-end
    text-blue  
    justify-between 
    mb-5
  `}
`;

export const GroupTitle = styled.div`
  ${tw`
    text-2xl 
    font-bold 
    text-primary   
    dark:text-blue 
    mr-10 
    capitalize
  `}
`;
export const ItemsCount = styled.span`
  ${tw`
    text-xl 
    font-semibold
  `}
`;

export const List = styled.div`
  ${tw`
    w-full 
    flex 
    flex-wrap 
    gap-5
  `} 

  & > div {
    /* Make sure this breakpoints simillar to the home slides breakpoints */
    ${tw`
      w-[calc((100% - (1.25rem * 1))/2)]
      500:w-[calc((100% - (1.25rem * 2))/3)]
      sm:w-[calc((100% - (1.25rem * 3))/4)]
      md:w-[calc((100% - (1.25rem * 1))/2)]
      lg:w-[calc((100% - (1.25rem * 3))/4)]
      xl:w-[calc((100% - (1.25rem * 4))/5)]
      2xl:w-[calc((100% - (1.25rem * 5))/6)]
    `}
  }
`;
