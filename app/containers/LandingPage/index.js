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
import { changeUsername, onCallUpload } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import Button from 'react-bootstrap/Button';
const key = 'home';
import styles from '../../style.css';
import Button from '@material-ui/core/Button';
// export function HomePage({
//   username,
//   loading,
//   error,
//   repos,
//   onSubmitForm,
//   onChangeUsername,
// }) {
//   useInjectReducer({ key, reducer });
//   useInjectSaga({ key, saga });

//   useEffect(() => {
//     // When initial state username is not null, submit the form to load repos
//     if (username && username.trim().length > 0) onSubmitForm();
//   }, []);

//   const reposListProps = {
//     loading,
//     error,
//     repos,
//   };

//   return (
//     <article>
//       <Helmet>
//         <title>Home Page</title>
//         <meta
//           name="description"
//           content="A React.js Boilerplate application homepage"
//         />
//       </Helmet>
//       <div>
//        <button onClick={this.onClickUpload()}>Upload</button>
//       </div>
//     </article>
//   );
// }
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.onUploadButton = this.onUploadButton.bind(this);
    this.onFileSelected = this.onFileSelected.bind(this);

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
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:4000/gst/upload',
    //   data: data,
    //   headers: {
    //     'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE1ODMwNDE1NzgsImV4cCI6MTU4MzA1NTk3OH0.koCravP6LjICSgolM-QDV5Hqe8sY25JakGQH6CvLmr8",
    //     'Content-Type': 'multipart/form-data'
    //   }
    // }).then(response => {
    //   console.log('response ', response);


    // }).catch(error => {
    //   console.log(error)
    // })
  }

  render() {
    return (

      <div>

        
        {/* <button type="button" class="btn btn-primary">Upload</button> */}
        <Button onClick={this.onUploadButton} variant="contained" color="primary">
          Upload
        </Button>

        <input
          type="file"
          name='upfile'
          ref={"fileUploader"}
          onChange={this.onFileSelected}
          style={{ display: "none" }}
        />
      </div>
    )
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
const withSaga = injectSaga({ key: 'landingPage', saga });


export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    onCallUpload: (data) => dispatch(onCallUpload(data))
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
)(LandingPage);
