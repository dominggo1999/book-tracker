import React from 'react';
import { useParams } from 'react-router-dom';
import JournalList from '../layout/JournalList/JournalList';

const JournalItems = () => {
  const { groupID } = useParams();

  // Call api here and pass to list component
  // ex
  // const {books,error,loading} = useJournalList(groupID)

  return (
    <>
      <JournalList />
    </>
  );
};

export default JournalItems;
