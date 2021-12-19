export const gap = (gapX, gapY) => {
  return `
    --gapX:${gapX / 4}rem; 
    --gapY:${gapY / 4}rem; 
    margin :calc(var(--gapY) / -2)  calc(var(--gapX) / -2);

    & > * {
      margin :calc(var(--gapY) / 2)  calc(var(--gapX) / 2);
    }
  `;
};
