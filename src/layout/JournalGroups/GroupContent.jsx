import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { books } from './FakeBookData';
import {
  GroupContentWrapper,
  BookCard,
  CardTitle,
  Author,
  PercentageBar,
  ProgressIndicator,
  ProgressNumber,
} from './JournalGroups.style';
import { ThemeContext } from '../../context/ThemeProvider';

import 'swiper/swiper.min.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

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

const randomPercentage = () => {
  return Math.round(Math.ceil(Math.random() * 100));
};

const GroupContent = ({ journals = books }) => {
  const { theme } = useContext(ThemeContext);
  const dark = theme === 'dark';

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
            const progress = randomPercentage();

            return (
              <SwiperSlide key={i.title + Math.random()}>
                <BookCard>
                  <LazyLoadImage
                    src={i.cover}
                    alt={i.title}
                    height={240}
                    effect="opacity"
                  />
                  <CardTitle>{truncatedTitle}</CardTitle>
                  <Author>{truncatedAuthor}</Author>
                  <PercentageBar dark={dark}>
                    <ProgressIndicator width={progress} />
                  </PercentageBar>
                  <ProgressNumber>
                    {progress}%
                  </ProgressNumber>
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
