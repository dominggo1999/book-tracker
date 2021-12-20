import tw, { styled } from 'twin.macro';
import { colors } from '../constants/colors';

export const SortFilter = styled.div`
  ${tw` 
    flex 
    w-full
  `}  

  .react-select-container{
    ${tw`
      w-full 
      sm:w-[18.75rem] 
    `}
  }

  .react-select__control{
    ${tw`
      bg-transparent 
      border-2
      border-blue 
      hover:border-blue 
      shadow-none 
      rounded-xl 
      py-1
    `}
  }

  .react-select__single-value{
    color : ${colors.blue};
  }

  .react-select__indicator-separator{
    display: none;
  }

  .react-select__indicators{
    svg{
      fill: white;
    }
  }

  .react-select__input-container, 
  .react-select__single-value{
    ${tw` 
      text-lg
      text-primary 
      dark:text-blue
    `}
  }

  .react-select__placeholder{
    ${tw`
      text-[#74aab4] 
      opacity-100
      dark:opacity-50 
      text-lg
    `}
  }

  .react-select__menu-list {
    padding: 0; 
  }

  .react-select__option {
    ${tw`
      dark:bg-primary 
      dark:text-white 
      font-medium 
      cursor-pointer
    `}
  }

  .react-select__option:hover{
    background :${colors.blueHover};
    color : ${colors.primary};
  }
  
  .react-select__option--is-selected{
    ${tw` 
      font-bold 
      pl-[30px]
      bg-blue 
      dark:bg-blue 
      text-primary 
      dark:text-primary 
      hover:bg-blue
    `}
  }
`;

export const Label = styled.label`
  ${tw`
    text-xl 
    font-bold 
    text-blue 
    mb-1
  `}
`;

export const FilterField = styled.div`
  ${tw`
    flex 
    flex-col  
    w-full
  `}
`;

export const SearchFilter = styled.div`
  ${tw`
    flex 
  `}  

  form{
    ${tw`
      w-full
    `}
  }

  input{
    ${tw`
      bg-transparent 
      border-blue 
      border-2
      rounded-xl 
      px-3  
      py-2
      text-primary
      dark:text-white 
      outline-none 
      text-lg   
      w-full 
      sm:w-[18.75rem]
    `}  

    line-height:1.75rem;
  } 
`;

export const FormArea = styled.div`
  ${tw`
    flex 
    gap-2
    w-full  
  `}

   /* submit button */
   button {
    ${tw`
      bg-blue 
      px-5  
      rounded-xl  
      hover:bg-blueHover 
      text-primary
    `}
  }
`;
