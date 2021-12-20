import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import queryString from 'query-string';
import {
  JournalListFilterWrapper,
} from './JournalListFilter.style';
import {
  SortFilter,
  Label,
  FilterField,
  SearchFilter,
  FormArea,
} from '../../atom/Filter';

const initialValues = {
  searchQuery: '',
};

const validationSchema = Yup.object({
  searchQuery: Yup.string()
    .required('Required'),
});

const sortFilter = [
  {
    value: 'newest',
    label: 'Newest (date added)',
  },
  {
    value: 'older',
    label: 'Older (date added)',
  },
  {
    value: 'title.asc',
    label: 'Title(A-Z)',
  },
  {
    value: 'title.desc',
    label: 'Title(Z-A)',
  },
];

const defaultValue = 'newest';

const JournalListFilter = ({ setUrl }) => {
  const [query, setQuery] = useState({
    title: 'harry potter',
    sort: '',
  });

  // Sort Filter
  const handleSelectChange = (e) => {
    setQuery({
      ...query,
      sort: e.value,
    });
  };

  // Search Filter
  const handleSubmit = (e) => {
    setQuery({
      ...query,
      title: e.searchQuery,
    });
  };

  const baseURL = 'https://www.googleapis.com/books/v1/volumes?';

  const createURL = () => {
    const fetchParams = queryString.stringify({
      q: [query.title],
    });

    return baseURL + fetchParams;
  };

  // This useEffect just for testing react infinite scroll
  useEffect(() => {
    setUrl(createURL());
  }, [query]);

  return (
    <JournalListFilterWrapper>
      <SortFilter>
        <FilterField>
          <Label htmlFor="sort-filter">Sort by</Label>
          <Select
            isSearchable={false}
            name="sort-filter"
            onChange={handleSelectChange}
            defaultValue={defaultValue}
            className="react-select-container"
            classNamePrefix="react-select"
            options={sortFilter}
          />
        </FilterField>
      </SortFilter>
      <SearchFilter>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <FilterField>
              <Label htmlFor="searchQuery">Search by title</Label>
              <FormArea>
                <Field
                  type="text"
                  required
                  placeholder="Type book title"
                  name="searchQuery"
                />
                <button
                  title="Search journal"
                  type="submit"
                >Search
                </button>
              </FormArea>
            </FilterField>
          </Form>
        </Formik>
      </SearchFilter>
    </JournalListFilterWrapper>
  );
};

export default JournalListFilter;
