import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../constants/breakpoints';

const {
  sm, md, lg, xl, xxl,
} = breakpoints;

const useSizes = () => {
  const isVerySmall = useMediaQuery({
    maxWidth: sm - 1,
  });

  const isSmall = useMediaQuery({
    minWidth: sm,
  });

  const isMedium = useMediaQuery({
    minWidth: md,
  });

  const isLarge = useMediaQuery({
    minWidth: lg,
  });

  const isXLarge = useMediaQuery({
    minWidth: xl,
  });

  const isXXLarge = useMediaQuery({
    minWidth: xxl,
  });

  return {
    isVerySmall,
    isSmall,
    isMedium,
    isLarge,
    isXLarge,
    isXXLarge,
  };
};

export default useSizes;
