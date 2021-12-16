import tw, { styled } from 'twin.macro';

export const AccountDetails = styled.div`
  ${tw`
    text-center 
    py-5
  `}
`;

export const DetailInfo = styled.div`
  ${tw`
    flex 
    flex-col 
    mb-5 
  `}
`;

export const Label = styled.span`
  ${tw`
    text-xl 
    text-blue 
    font-bold
  `}
`;

export const Info = styled.span`
  ${tw`
    text-primary
    dark:text-white 
    text-lg   
    inline-flex 
    justify-center 
  `}

  button {
    ${tw`
      text-xl 
      text-blue 
      ml-2 
    `}

    transition : transform ease-in-out 300ms;
  }
`;

export const Actions = styled.div`
  ${tw`
    flex 
    mx-auto 
    justify-center 
    gap-4
  `}
`;

export const ActionButton = styled.button`
  ${tw`
    bg-blue 
    py-2 
    px-4 
    rounded-full 
    text-primary 
    font-bold 
    hover:bg-blueHover 
    flex-grow-0 
  `}

  ${({ danger }) => danger && tw`bg-red text-white hover:bg-redHover`}
`;

export const NameForm = styled.div`
  ${tw`
    mt-2  
    pb-5
  `}

  input {
    ${tw`
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
      sm:max-w-max 
      max-w-[180px]
    `}
  }
`;

export const FieldArea = styled.div`
  ${tw`
    flex 
    flex-col 
    relative
  `}
`;

export const FormLine = styled.div`
  ${tw`
    flex   
    justify-center
    gap-2  
    gap-y-5
  `}

  button {
    ${tw`
       flex-none  
    `}
  }
`;

export const Error = styled.span`
  ${tw`
    text-sm  
    absolute 
    top-full 
    left-2 
    mt-1 
    text-red
  `}
`;

// Change Password Form
export const ChangePasswordWrapper = styled.div`
  ${tw` 
    mt-5 
    w-10/12
    sm:w-1/2 
    mx-auto
    relative 
    flex 
    flex-col 
    items-center
  `} 

  label {
    ${tw`
      text-left 
      mb-1 
      ml-2 
      text-primary
      dark:text-blue
    `}
  }

  input { 
    // The primary font has weird height, to make dots looked centered , this is the purpose of this line
    font-family : "sans-serif";

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
      max-w-[250px] 
    `}
  }
`;

export const PasswordFieldArea = styled.div`
  ${tw`
     flex 
     flex-col 
     mb-7 
     relative
  `}
`;

export const PasswordError = styled.span`
  ${tw`
    text-sm 
    dark:text-red
    text-primary 
    absolute  
    mr-2 
    mt-1
    top-full 
    text-right 
    w-full
  `}
`;

// Delete Account Modal
export const Modal = styled.div`
  ${tw`
    bg-white
    w-10/12 
    md:w-1/2 
    min-h-[200px] 
    py-10
    px-14 
    rounded-2xl 
    relative 
  `} 

  
  ${ActionButton}{
    ${tw`
      text-sm
    `}
  }
`;

export const ModalMessage = styled.p`
  ${tw`
    text-lg 
    font-semibold 
    mb-5
  `}  

  span{
    ${tw`
      italic
    `}
  }
`;

export const CloseModal = styled.button`
  ${tw`
    absolute 
    right-2 
    top-2 
    w-[40px] 
    h-[40px] 
    text-2xl 
  `}
`;
