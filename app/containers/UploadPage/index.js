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

import NavBar from 'components/SideBar/SideBar2';
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
import gstLogin1 from 'images/gstLogin1.jpg';
import csvImage from 'images/csv_export_2.png'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SpreadSheet from 'react-spreadsheet-component'
import Table from './MaterialTable'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootTable from './BootTable'
import BootTableNew from './BootTableNew'
// import Button from 'react-bootstrap/Button';
const key = 'home';

const data = [
  { "ID": 0, "Name": 'Harsh', "Price": 10 },
  { "ID": 2, "Name": 'Bhama', "Price": 10 }
]

class UploadPage extends React.Component {
  constructor(props) {
    super(props);
    this.onUploadButton = this.onUploadButton.bind(this);
    this.onFileSelected = this.onFileSelected.bind(this);
    this.onFetch = this.onFetch.bind(this)
    this.inCellClick = this.inCellClick.bind(this)
    this.onSubmitRow = this.onSubmitRow.bind(this)

    this.state = {
      uploadFile: '',
      onUpload: false,
      responseData: ''
    };
  }


  async onFetch() {
    var responseData = ''
    debugger
    await axios({
      method: 'post',
      url: 'http://localhost:4000/gst/uploadVal',
      data: '1',
      // headers: {
      //   token: (getLocalStorage('loginDetails')),
      //   'Content-Type': 'multipart/form-data',
      // },
    })
      .then(response => {
        console.log('response ', response);

        responseData = response.data.responseJson

      })
      .catch(error => {
        console.log(error);

      });

    await this.setState({
      responseData: responseData
    })

    console.log(this.state.responseData)


  }


  async inCellClick(val) {
    console.log(val)

  }
  onUploadButton() {

    this.refs.fileUploader.click();
  }

  async onFileSelected(event) {

    debugger
    console.log(event.target.files[0]);
    await this.setState({
      uploadFile: event.target.files[0],
    });

    const data = new FormData();
    await data.append('upfile', this.state.uploadFile);
    // data.append('type', owner);
    await console.log(data);
    await this.props.onCallUpload(data);
    await this.setState({
      onUpload: false
    })
  }

  async onSubmitRow(cell, row, index, extraData) {
    debugger
    console.log(row)
  }


  render() {

    return (
      <div>
        <NavBar currentPage="Upload Form D" >

          <input
            type="file"
            name="upfile"
            onChange={this.onFileSelected}
            ref={"fileUploader"}
            onClick={(event) => {
              event.target.value = null
            }}
            style={{ display: 'none' }}
          />


          {/* <Button
            variant="contained"
            color="primary"
            onClick={this.onUploadButton}
            style={{ backgroundColor: '#4f2d7f' }}
          >
            Upload Form D
          </Button> */}
          <Card className="card-1" onClick={this.onUploadButton}>
            <CardActionArea>
              <CardMedia
                // className={classes.media}
                style={{ height: '140px' }}
                image={csvImage}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Upload Form D
            </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Provides interoperability and uniform interpretation across the
                  entire GST eco-system and allows submission of an already
              generated standard invoice on a common portal{' '}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Upload
          </Button>
              <Button size="small" color="primary">
                Learn More
          </Button>
            </CardActions>
          </Card>

          <Button onClick={this.onFetch}>Fetch</Button>
          <div>
            <BootTable
              data={data}
              onSubmitRow={this.onSubmitRow}

            />

          </div>
          { this.state.responseData &&
            <div>
              <BootTableNew
                data={this.state.responseData}
                onSubmitRow={this.onSubmitRow}
              />
            </div>
          }
        </NavBar>
      </div>
    );
  }
}
UploadPage.propTypes = {
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
// const withSaga = injectSaga({ key: 'UploadPage', saga });

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
)(UploadPage);
