import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { books } from './FakeBookData';
import { GroupContentWrapper } from './JournalGroups.style';
import JournalCard from '../../atom/JournalCard/JournalCard';
import useSizes from '../../hooks/useSizes';
import 'swiper/swiper.min.css';

const responsiveBreakpoints = {
  // xs
  500: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  // sm
  640: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  // md
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  // lg
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  // xl
  1280: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  // 2xl
  1536: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
};

const GroupContent = ({ journals = books }) => {
  const {
    isSmall, isMedium, isLarge, isXLarge, isXXLarge,
  } = useSizes();

  // Decide whether or not to loop base on number of journals existed
  const adjustLoop = () => {
    const length = journals.length;

    if(isXLarge) {
      return length > responsiveBreakpoints['1280'].slidesPerView;
    }

    if(isLarge) {
      return length > responsiveBreakpoints['1024'].slidesPerView;
    }

    if(isMedium) {
      return length > responsiveBreakpoints['768'].slidesPerView;
    }

    if(isSmall) {
      return length > responsiveBreakpoints['640'].slidesPerView;
    }

    return length > 2;
  };

  const isLoop = import.meta.env.MODE === 'development' ? false : adjustLoop();

  return (
    <GroupContentWrapper>
      <Swiper
        loop={isLoop}
        breakpoints={responsiveBreakpoints}
        spaceBetween={20}
        slidesPerView={2}
      >

        {
          journals && journals.slice(0, 10).map((i) => {
            return (
              <SwiperSlide key={i.title + Math.random()}>
                <JournalCard details={i} />
              </SwiperSlide>
            );
          })
        }

      </Swiper>
    </GroupContentWrapper>
  );
};

export default GroupContent;
