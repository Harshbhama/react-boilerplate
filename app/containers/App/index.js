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
import { Switch, Route, withRouter } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import UploadPage from 'containers/UploadPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import LandingPage from 'containers/LandingPage/Loadable';
import GlobalStyle from '../../global-styles';

import { TransitionGroup, CSSTransition } from "react-transition-group";

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  .fade-enter {
    opacity: 0.01;
}
.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
}
.fade-exit {
    opacity: 1;
}
  
.fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
}
`;

function App( {location} ) {
  debugger
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="GT Tax Pro"
      >
        <meta name="description" content="GT Tax Pro" />
      </Helmet>
      {/* <Header /> */}
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <Switch location={location}>
            <Route exact path="/" component={LoginPage} />
            <Route path="/upload" component={UploadPage} />
            <Route path="/landing" component={LandingPage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
export default withRouter(App);
