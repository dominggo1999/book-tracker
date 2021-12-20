import React from 'react';
import Select from 'react-select';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
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

const JournalListFilter = () => {
  const handleSelectChange = (e) => {
    console.log(e.value);
  };

  const handleSubmit = () => {

  };

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
