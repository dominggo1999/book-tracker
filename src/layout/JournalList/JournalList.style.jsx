import tw, { styled } from 'twin.macro';


export const Wrapper = styled.div`
  ${tw`
    flex 
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
  `}
`;

export const GroupTitle = styled.div`
  ${tw`
    text-2xl 
    font-bold 
    text-primary   
    dark:text-blue 
    mr-10
  `}
`;
export const ItemsCount = styled.span`
  ${tw`
    text-xl
  `}
`;

export const List = styled.div`
  ${tw`
    w-full 
    flex 
    flex-wrap 
    justify-between 
    mr-[-20px]
  `}
`;
