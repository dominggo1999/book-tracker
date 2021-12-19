import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { ImStatsBars } from 'react-icons/im';
import { MdOutlineFormatQuote } from 'react-icons/md';
import {
  Block,
  SubHeader,
  StatsItem,
  Sub,
  StatsNumber,
  DetailsButton,
  StatsRating,
  BlockIcon,
  SideStatsSection,
  Quote,
  Author,
  Border,
} from './SideStats.style';
import { NavLink } from '../../atom/Link';

const SideStats = () => {
  const thisYear = new Date().getFullYear();

  return (
    <SideStatsSection>
      <Border>
        <Block>
          <BlockIcon>
            <ImStatsBars />
          </BlockIcon>

          <Sub>
            <SubHeader>{thisYear}</SubHeader>
            <StatsItem>
              <StatsNumber>
                50 {' '}
              </StatsNumber>
              books
            </StatsItem>
            <StatsItem>
              <StatsNumber>
                6900 {' '}
              </StatsNumber>
              pages
            </StatsItem>
            <StatsItem>
              <StatsNumber>
                10 {' '}
              </StatsNumber>
              hours of audiobook
            </StatsItem>
            <StatsRating>
              <AiFillStar /> {' '}
              <StatsNumber>
                4.2  {' '}
              </StatsNumber>
              average rating
            </StatsRating>
          </Sub>

          <Sub>
            <SubHeader>Total</SubHeader>
            <StatsItem>
              <StatsNumber>
                100 {' '}
              </StatsNumber>
              books
            </StatsItem>
            <StatsItem>
              <StatsNumber>
                16421 {' '}
              </StatsNumber>
              pages
            </StatsItem>
            <StatsItem>
              <StatsNumber>
                21 {' '}
              </StatsNumber>
              hours of audiobook
            </StatsItem>
            <StatsRating>
              <AiFillStar /> {' '}
              <StatsNumber>
                4.5  {' '}
              </StatsNumber>
              average rating
            </StatsRating>
          </Sub>

          <NavLink to="/stats">
            <DetailsButton>
              Stats Details
            </DetailsButton>
          </NavLink>
        </Block>

      </Border>

      <Border>
        <Block>
          <BlockIcon>
            <MdOutlineFormatQuote />
          </BlockIcon>
          <Sub>
            <SubHeader>
              QOTD
            </SubHeader>
            <Quote>
              &ldquo;
              A reader lives a thousand lives before he dies . . . The man who never reads lives only one.
              &rdquo;
            </Quote>
            <Author>
              - George R.R. Martin
            </Author>
          </Sub>
        </Block>
      </Border>
    </SideStatsSection>
  );
};

export default SideStats;
