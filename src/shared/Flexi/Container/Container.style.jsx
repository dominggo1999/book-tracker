import tw, { styled } from 'twin.macro';

export const ContainerStyle = styled.div`
  ${tw` 
    container
    mx-auto 
    relative
  `}

  padding : 15px;
  border: ${({ debug }) => debug && '1px solid green'};
`;
