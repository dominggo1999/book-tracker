import React from 'react';
import JournalGroups from '../JournalGroups/JournalGroups';
import SideStats from '../SideStats/SideStats';
import { ShelfWrapper } from './Shelf.style';
import 'twin.macro';
import { Container }from '../../shared/Flexi';

const Shelf = () => {
  return (
    <ShelfWrapper>
      <Container>
        <div tw="flex flex-wrap gap-y-10 justify-between">

          <div tw="w-full md:w-[50%] lg:w-[60%] xl:w-[70%]">
            <JournalGroups />
          </div>
          <div tw="w-full md:w-[40%] lg:w-[30%] xl:w-[25%]">
            <SideStats />
          </div>

        </div>
      </Container>
    </ShelfWrapper>
  );
};

export default Shelf;
