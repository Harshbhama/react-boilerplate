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
import axios from 'axios'
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername, onCallUpload, onLoginSubmit } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import Button from 'react-bootstrap/Button';
const key = 'home';
import styles from '../../style.css';
import Button from '@material-ui/core/Button';
import AdminNavbar from 'components/AdminNavbarLinks'
import SignInSide from './login'
import gstLogin1 from 'images/gstLogin1.jpg'
import gstLogin2 from 'images/gstLogin2.jpg'
import gstLogin3 from 'images/gstLogin3.jpg'
import LazyLoad from 'react-lazyload';
import gtLogo from 'images/gt_logo.svg'
import Typography from '@material-ui/core/Typography';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.onUploadButton = this.onUploadButton.bind(this);
    this.onFileSelected = this.onFileSelected.bind(this);
    this.onLoginSubmitVal = this.onLoginSubmitVal.bind(this)
    this.state = {
      uploadFile: ''
    }

  }

  onUploadButton() {
    this.refs.fileUploader.click();
  }

  async onFileSelected(event) {
   
    console.log(event.target.files[0]);
    await this.setState({
      uploadFile: event.target.files[0]
    })
    const data = new FormData();
    await data.append('upfile', this.state.uploadFile);
    // data.append('type', owner);
    await console.log(data);

    await onCallUpload(data);
    await this.props.onCallUpload(data);

  }

  async onLoginSubmitVal(values) {

    console.log("here");
    console.log(values);
    await this.props.onLoginSubmit(values);
    
  }


  render() {
    return (

      <div>
        <LazyLoad>
          <img src={gstLogin1} alt="Logo" style={{ position: 'absolute', marginLeft: '-268px', height: '640px', width: '1302px' }} />
        </LazyLoad>
        <img src={gtLogo} alt="Logo" style={{width: '22%', position: 'absolute', width: '22%',top: '16%', left: '10%'}} />
        <Typography style={{position: 'absolute', color: 'white', fontSize: '48px', top: '41%', left: '12%', fontWeight: '500'}}>
          GT Tax Pro
        </Typography>
        <Typography style={{position: 'absolute', color: 'white', fontSize: '20px', top: '53%', left: '161px'}}>
          Gst Filing made easy

        </Typography>
        <SignInSide
          onSubmit={this.onLoginSubmitVal}
        />

      </div>
    )
  }
}
LoginPage.propTypes = {
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
const withSaga = injectSaga({ key: 'loginPage', saga });


export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    onCallUpload: (data) => dispatch(onCallUpload(data)),
    onLoginSubmit: (data) => dispatch(onLoginSubmit(data))
  };
}


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  withSaga,
  memo,
)(LoginPage);
