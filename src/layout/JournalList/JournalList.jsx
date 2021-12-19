import React from 'react';
import { Container } from '../../shared/Flexi';
import {
  JournalListHeader,
  GroupTitle,
  ItemsCount,
} from './JournalList.style';

const JournalList = () => {
  return (
    <Container>
      <JournalListHeader>
        <GroupTitle>Currently Reading</GroupTitle>
        <ItemsCount>100 results</ItemsCount>
      </JournalListHeader>
    </Container>
  );
};

export default JournalList;
