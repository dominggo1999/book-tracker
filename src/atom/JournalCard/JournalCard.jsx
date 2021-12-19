import React, { useContext } from 'react';
import {
  Card, CardTitle, Author, PercentageBar, ProgressIndicator, ProgressNumber,
} from './JournalCard.style';
import { ThemeContext } from '../../context/ThemeProvider';

const truncateString = (str, num) => {
  if (str.length > num) {
    return `${str.slice(0, num)}...`;
  }
  return str;
};

const randomPercentage = () => {
  return Math.round(Math.ceil(Math.random() * 100));
};

const JournalCard = ({ details }) => {
  const { theme } = useContext(ThemeContext);
  const dark = theme === 'dark';

  const truncatedTitle = truncateString(details.title, 34);
  const truncatedAuthor = truncateString(details.author, 50);
  const progress = randomPercentage();

  return (
    <Card>
      <img
        src={details.cover}
        alt={details.title}
        height={240}
      />
      <CardTitle>{truncatedTitle}</CardTitle>
      <Author>{truncatedAuthor}</Author>
      <PercentageBar dark={dark}>
        <ProgressIndicator width={progress} />
      </PercentageBar>
      <ProgressNumber>
        {progress}%
      </ProgressNumber>
    </Card>
  );
};

export default JournalCard;
