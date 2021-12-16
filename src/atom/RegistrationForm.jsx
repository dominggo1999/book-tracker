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
    sm:w-72
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
    text-white 
    py-2
  `}
`;
