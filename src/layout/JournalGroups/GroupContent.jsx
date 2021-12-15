import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { books } from './FakeBookData';
import {
  GroupContentWrapper,
  BookCard,
  CardTitle,
  Author,
} from './JournalGroups.style';

import 'swiper/swiper.min.css';

const responsiveBreakpoints = {
  500: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
};

const truncateString = (str, num) => {
  if (str.length > num) {
    return `${str.slice(0, num)}...`;
  }
  return str;
};

const GroupContent = ({ journals = books }) => {
  return (
    <GroupContentWrapper>
      <Swiper
        loop
        breakpoints={responsiveBreakpoints}
        spaceBetween={20}
        slidesPerView={2}
      >

        {
          journals && journals.map((i) => {
            const truncatedTitle = truncateString(i.title, 34);
            const truncatedAuthor = truncateString(i.author, 50);

            return (
              <SwiperSlide key={i.title + Math.random()}>
                <BookCard>
                  <img
                    src={i.cover}
                    alt={i.title}
                  />
                  <CardTitle>{truncatedTitle}</CardTitle>
                  <Author>{truncatedAuthor}</Author>
                </BookCard>
              </SwiperSlide>
            );
          })
        }

      </Swiper>
    </GroupContentWrapper>
  );
};

export default GroupContent;
