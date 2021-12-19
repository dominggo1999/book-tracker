import tw, { styled } from 'twin.macro';

export const JournalListHeader = styled.div`
  ${tw`
    flex  
    items-end
    text-blue 
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
