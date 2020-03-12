/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

import { useInjectReducer } from 'utils/injectReducer';
import injectSaga, { useInjectSaga } from 'utils/injectSaga';

import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import Button from '@material-ui/core/Button';


import gtLogo from 'images/gt_logo.svg';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername, onCallUpload } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from '../../style.css';
import Card from './Cards';
import NavBar from 'components/SideBar/SideBar2';
import PaperBase from 'components/PaperBase/PaperBase'
import Navigator from 'components/PaperBase/Navigator'
import { Link, withRouter } from "react-router-dom";

// import Button from 'react-bootstrap/Button';
const key = 'home';
const drawerWidth = 256;

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.onUploadButton = this.onUploadButton.bind(this);
    this.onFileSelected = this.onFileSelected.bind(this);

    this.state = {
      uploadFile: '',
    };
    this.onEinvoiceClick = this.onEinvoiceClick.bind(this)
  }

  onUploadButton() {
    this.refs.fileUploader.click();
  }

  async onFileSelected(event) {
    console.log(event.target.files[0]);
    await this.setState({
      uploadFile: event.target.files[0],
    });
    const data = new FormData();
    await data.append('upfile', this.state.uploadFile);
    // data.append('type', owner);
    await console.log(data);

    await onCallUpload(data);
    await this.props.onCallUpload(data);
  }
  async onEinvoiceClick(){
    console.log("in E invoice")
    const {history} = this.props
    history.push('/upload')
  }
  render() {
    return (
      <div>
        <NavBar currentPage="Choose Module" fromPage = "Landing">
          <Card 
          onEinvoiceClick = {this.onEinvoiceClick}
          />
        </NavBar>
   
      </div>
    );
  }
}
LandingPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});
//const withSaga = injectSaga({ key: 'LandingPage', saga });

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    onCallUpload: data => dispatch(onCallUpload(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  // withSaga,
  memo,
  withRouter
)(LandingPage);
