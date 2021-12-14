// readable routes linter
/* eslint react/jsx-max-props-per-line: 0 */

import React, { Suspense, lazy } from 'react';
import {
  Route, Switch,
} from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const AddBook = lazy(() => import('./pages/AddBook'));
const BookDetails = lazy(() => import('./pages/BookDetails'));
const FindBook = lazy(() => import('./pages/FindBook'));
const JournalDetails = lazy(() => import('./pages/JournalDetails'));
const JournalItems = lazy(() => import('./pages/JournalItems'));
const JournalNotes = lazy(() => import('./pages/JournalNotes'));
const JournalProgress = lazy(() => import('./pages/JournalProgress'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Stats = lazy(() => import('./pages/Stats'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Routes = () => {
  return (
    <Suspense
      fallback={(
        <p>

        </p>
      )}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-book" component={AddBook} />

        <Route exact path="/find-book" component={FindBook} />
        <Route exact path="/book-details/:bookID" component={BookDetails} />

        <Route exact path={['/:groupID(to-read|currently-reading|finished|did-not-finish)']} component={JournalItems} />

        <Route exact path="/journal-details/:journalID" component={JournalDetails} />
        <Route exact path="/journal-notes/:journalID" component={JournalNotes} />
        <Route exact path="/journall-progress/:journalID" component={JournalProgress} />

        <Route exact path="/stats" component={Stats} />

        <Route exact path="/profile" component={Profile} />

        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />

        {/* 404 PAGE */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
