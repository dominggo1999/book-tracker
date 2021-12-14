import React from 'react';
import {
  Groups,
  GroupItem,
  GroupHeader,
  Title,
  SeeMoreButton,
} from './JournalGroups.style';
import { NavLink } from '../../atom/Link';

const JournalGroups = () => {
  return (
    <Groups>
      <GroupItem>
        <GroupHeader>
          <Title>
            To Read
          </Title>
          <NavLink to="/to-read">
            <SeeMoreButton>
              See More
            </SeeMoreButton>
          </NavLink>
        </GroupHeader>
      </GroupItem>
      <GroupItem>
        <GroupHeader>
          <Title>
            Currrently Reading
          </Title>
          <NavLink to="/currently-reading">
            <SeeMoreButton>
              See More
            </SeeMoreButton>
          </NavLink>
        </GroupHeader>
      </GroupItem>
      <GroupItem>
        <GroupHeader>
          <Title>
            Finished
          </Title>
          <NavLink to="finished">
            <SeeMoreButton>
              See More
            </SeeMoreButton>
          </NavLink>
        </GroupHeader>
      </GroupItem>
      <GroupItem>
        <GroupHeader>
          <Title>
            Did not finish
          </Title>
          <NavLink to="/did-not-finish">
            <SeeMoreButton>
              See More
            </SeeMoreButton>
          </NavLink>
        </GroupHeader>
      </GroupItem>

    </Groups>
  );
};

export default JournalGroups;
