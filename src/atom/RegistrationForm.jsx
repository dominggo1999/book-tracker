import tw, { styled } from 'twin.macro';

export const FormType = styled.h1`
  ${tw`
    mt-4
    text-2xl 
    text-blue 
    text-center 
    uppercase 
    font-bold
  `}
`;

export const RegistrationFormWrapper = styled.div`
  ${tw`
    w-full 
    sm:w-80
    flex 
    flex-col 
    mx-auto 
    text-center 
    mt-5
  `}
`;

export const AuthProviders = styled.div`
  ${tw`
    flex 
    flex-col
    gap-y-3
  `}
`;

export const Divider = styled.span`
  ${tw` 
    text-primary
    dark:text-white 
    py-2
  `}
`;

export const FormFields = styled.div`
  input{
    ${tw`
      w-full
      bg-transparent 
      border-blue 
      border-2
      rounded-full 
      px-4  
      py-1
      text-primary
      dark:text-white 
      outline-none 
      text-lg   
      mb-4
    `}  

    line-height:1.75rem;
  }  

  label{
    ${tw` 
      flex 
      ml-4
      w-full 
      text-left 
      text-blue 
      text-lg 
      font-semibold 
      mb-1
    `}
  }
`;

export const LabelAndError = styled.div`
  ${tw`
    flex 
    justify-between 
    items-center 
  `}
`;

export const ErrorMsgWrapper = styled.span`
  ${tw`
    text-primary
    dark:text-red 
    text-sm 
    mr-5 
    w-full 
    text-right
  `}
`;

export const FormButton = styled.button`
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
    font-bold 
    mt-2 
    text-primary
  `} 

  svg{
    ${tw`
      mr-2
    `}

    margin-bottom:4px;
  }
`;

export const FormMessage = styled.p`
  ${tw` 
    font-semibold
    mt-4
    text-primary
    dark:text-white 
  `}

  a{
    ${tw` 
      text-blue 
      font-bold
    `}
  }
`;
