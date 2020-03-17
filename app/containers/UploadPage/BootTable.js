import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const products = [
  { "ID": 0, "Name": 'Harsh', "Price": 10 },
  { "ID": 2, "Name": 'Bhama', "Price": 10 }
];

function afterSaveCell(oldValue, newValue, row, column, done) {
  console.log(oldValue)
  console.log(row)
  
  return { async: true };
}

function onSubmitVal(cell, row, index, extraData){
  console.log(row)
}

class BootTable extends React.Component {

  constructor(props){
    super(props);
  }


  render() {
    const columns = [{
      dataField: 'ID',
      text: 'ID',
      hidden: true
    }, {
      dataField: 'Name',
      text: 'Name'
    }, {
      dataField: 'Price',
      text: 'Price',
      title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      style: (cell, row, rowIndex, colIndex) => {
        const backgroundColor = row.ID > 0 ? 'white' : 'blue';
        return { backgroundColor };
      }
    },
    {
     
      text: 'Action',
      editable: false,
      formatter: (cell, row, index, extraData) => (
        <span>
          <Button variant="raised" color="primary" onClick = {() => this.props.onSubmitRow(cell, row, index, extraData)}>Submit</Button>
        </span>
      )
    }
    ];
    return (
      <BootstrapTable
        keyField="ID"
        data={products}
        columns={columns}
        cellEdit={cellEditFactory({ mode: 'click' , afterSaveCell})}
      />
    )
  }
}
export default BootTable
