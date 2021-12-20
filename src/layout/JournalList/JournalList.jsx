import React, { useEffect, useState } from 'react';
import InfiniteScroll from'react-infinite-scroll-component';
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
import JournalListFilter from '../JournalListFilter/JournalListFilter';

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
  // Just for testing purpose
  const [url, setUrl] = useState('');
  const [bookList, setBookList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const fetchGoogleBooksAPI = async (startId = startIndex) => {
    const urlWithPagination = `${url}&startIndex=${startId}`;

    const res = await fetch(urlWithPagination);
    const json = await res.json();
    const items = await json.items;

    const books = await items?.map((i) => {
      return {
        id: `${i.id}-${i.etag}`,
        title: i.volumeInfo.title,
        author: i.volumeInfo.authors ? i.volumeInfo.authors[0] : '',
        cover: i.volumeInfo.imageLinks ? (i.volumeInfo.imageLinks.thumbnail || i.volumeInfo.imageLinks.smallThumbnail) : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbooktrapper.com%2Fassets%2Fbook_placeholder-406203b0e6780be8153818c65f7d80061f62079d907f33fc092c2434cdf8e954.png&f=1&nofb=1',
      };
    });

    return { books, total: json.totalItems };
  };

  const getData = async () => {
    const { books, total } = await fetchGoogleBooksAPI(0);
    setTotalResults(total);
    setBookList(books);
    setStartIndex(10);
    setHasMore(true);
  };

  const getMoreData = async () => {
    // Check if arrived at the last page

    if(bookList.length + 10 > totalResults) {
      setHasMore(false);
      return;
    }

    const { books } = await fetchGoogleBooksAPI();

    setBookList((prevBooks) => {
      return [
        ...prevBooks,
        ...books,
      ];
    });
    setStartIndex(startIndex + 10);
  };

  useEffect(() => {
    // const requestController = new AbortController();

    getData();

    // return () => {
    //   requestController.abort();
    // };
  }, [url]);

  console.log(totalResults);

  return (
    <Wrapper>

      <Container>

        <div tw="flex flex-wrap justify-between">
          <div tw="w-full md:w-[50%] lg:w-[60%] xl:w-[70%]">
            <JournalListHeader>
              <GroupTitle>{formatTitle(groupID)}</GroupTitle>
              <ItemsCount>{totalResults} {' '} results</ItemsCount>
            </JournalListHeader>

            {/* Filter Here */}
            <JournalListFilter setUrl={setUrl} />

            <InfiniteScroll
              dataLength={bookList.length}
              next={getMoreData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={(
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
                )}
            >
              <List>
                {
                bookList?.length > 0 && bookList.map((i) => {
                  // Div needed for creating cardsPerRow breakpoints
                  return (
                    <JournalCard
                      key={i.id}
                      details={i}
                    />
                  );
                })
              }
              </List>
            </InfiniteScroll>

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
