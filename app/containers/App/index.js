/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import UploadPage from 'containers/UploadPage/Loadable'
import LoginPage from 'containers/LoginPage/Loadable'
import GlobalStyle from '../../global-styles';
import LandingPage from 'containers/LandingPage/Loadable'

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="GT Tax Pro"
      >
        <meta name="description" content="GT Tax Pro" />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/upload" component={UploadPage} />
        <Route path="/landing" component={LandingPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
