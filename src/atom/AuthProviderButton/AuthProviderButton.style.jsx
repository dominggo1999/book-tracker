import tw, { styled } from 'twin.macro';

export const Btn = styled.button`
  ${tw`
    flex    
    justify-center
    items-center 
    w-full  
    bg-blue 
    rounded-full 
    font-semibold 
    hover:bg-blueHover 
    py-2 
  `}

  svg{
    ${tw`
      mr-2
    `}

    margin-bottom:4px;
  }
`;
