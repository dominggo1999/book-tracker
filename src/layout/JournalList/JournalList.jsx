import React from 'react';
import { Container } from '../../shared/Flexi';
import {
  JournalListHeader,
  GroupTitle,
  ItemsCount,
  Wrapper,
  List,
} from './JournalList.style';
import SideStats from '../SideStats/SideStats';
import { books as fakeBooks } from '../JournalGroups/FakeBookData';
import JournalCard from '../../atom/JournalCard/JournalCard';
import 'twin.macro';

const books = [
  ...fakeBooks,
  ...fakeBooks,
  ...fakeBooks,
  ...fakeBooks,
];

const formatTitle = (title) => {
  return title.split('-').join(' ');
};

const JournalList = ({ groupID }) => {
  return (
    <Wrapper>
      <Container>

        <div tw="flex flex-wrap justify-between">
          <div tw="w-full md:w-[50%] lg:w-[60%] xl:w-[70%]">
            <JournalListHeader>
              <GroupTitle>{formatTitle(groupID)}</GroupTitle>
              <ItemsCount>100 results</ItemsCount>
            </JournalListHeader>

            {/* Filter Here */}

            <List>
              {
                books && books.slice(0, 10).map((i) => {
                  // Div needed for creating cardsPerRow breakpoints
                  return (
                    <JournalCard details={i} />
                  );
                })
              }
            </List>
          </div>
          <div tw="w-full mt-10 md:mt-0 md:w-[40%] lg:w-[30%] xl:w-[25%]">
            <SideStats />
          </div>
        </div>

      </Container>
    </Wrapper>
  );
};

export default JournalList;
