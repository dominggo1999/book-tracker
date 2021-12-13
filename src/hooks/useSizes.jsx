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
    maxWidth: md - 1,
  });

  const isMedium = useMediaQuery({
    minWidth: md,
    maxWidth: lg - 1,
  });

  const isLarge = useMediaQuery({
    minWidth: lg,
    maxWidth: xl - 1,
  });

  const isXLarge = useMediaQuery({
    minWidth: xl,
    maxWidth: xxl - 1,
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
