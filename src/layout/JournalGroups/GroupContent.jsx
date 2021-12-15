import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { books } from './FakeBookData';
import { GroupContentWrapper, BookCard } from './JournalGroups.style';
import { breakpoints } from '../../constants/breakpoints';

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
            return (
              <SwiperSlide key={i.title + Math.random()}>
                <BookCard>
                  <img
                    src={i.cover}
                    alt={i.title}
                  />
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
