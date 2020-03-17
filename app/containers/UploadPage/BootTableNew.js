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
import styles from '../../style.css';

const products = [
  { "ID": 0, "Name": 'Harsh', "Price": 10 },
  { "ID": 2, "Name": 'Bhama', "Price": 10 }
];

function afterSaveCell(oldValue, newValue, row, column, done) {
  console.log(oldValue)
  console.log(row)

  return { async: true };
}

function onSubmitVal(cell, row, index, extraData) {
  console.log(row)
}

class BootTable extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const columns = [{
      dataField: 'Irn',
      text: 'Irn',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'TaxSch',
      text: 'TaxSch',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'Version',
      text: 'Version',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'DocDtlsDt',
      text: 'DocDtlsDt',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'DocDtlsNo',
      text: 'DocDtlsNo',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'DispDtlsEm',
      text: 'DispDtlsEm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'DispDtlsPh',
      text: 'DispDtlsPh',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'DocDtlsTyp',
      text: 'DocDtlsTyp',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'PayDtlsNam',
      text: 'PayDtlsNam',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ShipDtlsEm',
      text: 'ShipDtlsEm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ShipDtlsPh',
      text: 'ShipDtlsPh',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'BuyerDtlsEm',
      text: 'BuyerDtlsEm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'BuyerDtlsPh',
      text: 'BuyerDtlsPh',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'DispDtlsBnm',
      text: 'DispDtlsBnm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'DispDtlsBno',
      text: 'DispDtlsBno',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'DispDtlsDst',
      text: 'DispDtlsDst',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'DispDtlsLoc',
      text: 'DispDtlsLoc',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'DispDtlsPin',
      text: 'DispDtlsPin',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ExpDtlsPort',
      text: 'ExpDtlsPort',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListQty',
      text: 'ItemListQty',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },





    {
      dataField: 'PayDtlsMode',
      text: 'PayDtlsMode',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'ShipDtlsBnm',
      text: 'ShipDtlsBnm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ShipDtlsBno',
      text: 'ShipDtlsBno',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'ShipDtlsDst',
      text: 'ShipDtlsDst',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'ShipDtlsLoc',
      text: 'ShipDtlsLoc',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'ShipDtlsPin',
      text: 'ShipDtlsPin',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'TranDtlsTyp',
      text: 'TranDtlsTyp',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ValDtlsDisc',
      text: 'ValDtlsDisc',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'BuyerDtlsBnm',
      text: 'BuyerDtlsBnm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'BuyerDtlsBno',
      text: 'BuyerDtlsBno',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'BuyerDtlsDst',
      text: 'BuyerDtlsDst',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'BuyerDtlsLoc',
      text: 'BuyerDtlsLoc',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'BuyerDtlsPin',
      text: 'BuyerDtlsPin',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'DispDtlsFlno',
      text: 'DispDtlsFlno',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'DispDtlsStcd',
      text: 'DispDtlsStcd',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListUnit',
      text: 'ItemListUnit',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'PayDtlsCrDay',
      text: 'PayDtlsCrDay',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'PayDtlsCrTrn',
      text: 'PayDtlsCrTrn',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'PayDtlsDirDr',
      text: 'PayDtlsDirDr',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'RefDtlsPORef',
      text: 'RefDtlsPORef',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },






    {
      dataField: 'SellerDtlsEm',
      text: 'SellerDtlsEm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'SellerDtlsPh',
      text: 'SellerDtlsPh',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ShipDtlsFlno',
      text: 'ShipDtlsFlno',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'ShipDtlsStcd',
      text: 'ShipDtlsStcd',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'TranDtlsCatg',
      text: 'TranDtlsCatg',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'BuyerDtlsFlno',
      text: 'BuyerDtlsFlno',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'BuyerDtlsStcd',
      text: 'BuyerDtlsStcd',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'DispDtlsGstin',
      text: 'DispDtlsGstin',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'DispDtlsTrdNm',
      text: 'DispDtlsTrdNm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ExpDtlsExpCat',
      text: 'ExpDtlsExpCat',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ExpDtlsForCur',
      text: 'ExpDtlsForCur',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ExpDtlsWthPay',
      text: 'ExpDtlsWthPay',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListHsnCd',
      text: 'ItemListHsnCd',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListPrdNm',
      text: 'ItemListPrdNm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListTaxRt',
      text: 'ItemListTaxRt',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'PayDtlsBalAmt',
      text: 'PayDtlsBalAmt',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'RefDtlsExtRef',
      text: 'RefDtlsExtRef',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'RefDtlsInvRmk',
      text: 'RefDtlsInvRmk',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'SellerDtlsBnm',
      text: 'SellerDtlsBnm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'SellerDtlsBno',
      text: 'SellerDtlsBno',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },





    {
      dataField: 'SellerDtlsDst',
      text: 'SellerDtlsDst',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'SellerDtlsLoc',
      text: 'SellerDtlsLoc',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'SellerDtlsPin',
      text: 'SellerDtlsPin',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'ShipDtlsGstin',
      text: 'ShipDtlsGstin',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'ShipDtlsTrdNm',
      text: 'ShipDtlsTrdNm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'ValDtlsAssVal',
      text: 'ValDtlsAssVal',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ValDtlsCesVal',
      text: 'ValDtlsCesVal',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'BuyerDtlsGstin',
      text: 'BuyerDtlsGstin',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'BuyerDtlsTrdNm',
      text: 'BuyerDtlsTrdNm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ExpDtlsCntCode',
      text: 'ExpDtlsCntCode',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ExpDtlsShipBDt',
      text: 'ExpDtlsShipBDt',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ExpDtlsShipBNo',
      text: 'ExpDtlsShipBNo',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListAssAmt',
      text: 'ItemListAssAmt',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListBarcde',
      text: 'ItemListBarcde',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListCgstRt',
      text: 'ItemListCgstRt',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListIgstRT',
      text: 'ItemListIgstRT',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListSgstRt',
      text: 'ItemListSgstRt',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListTotAmt',
      text: 'ItemListTotAmt',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'PayDtlsAcctDet',
      text: 'PayDtlsAcctDet',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'PayDtlsPayTerm',
      text: 'PayDtlsPayTerm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },



    {
      dataField: 'RefDtlsInvStDt',
      text: 'RefDtlsInvStDt',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'RefDtlsProjRef',
      text: 'RefDtlsProjRef',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'RefDtlsTendRef',
      text: 'RefDtlsTendRef',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'SellerDtlsFlno',
      text: 'SellerDtlsFlno',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'SellerDtlsStcd',
      text: 'SellerDtlsStcd',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'TranDtlsEcmTrn',
      text: 'TranDtlsEcmTrn',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'TranDtlsRegRev',
      text: 'TranDtlsRegRev',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ValDtlsCgstVal',
      text: 'ValDtlsCgstVal',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ValDtlsIgstVal',
      text: 'ValDtlsIgstVal',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListPrdDesc',
      text: 'ItemListPrdDesc',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'PayDtlsFinInsBr',
      text: 'PayDtlsFinInsBr',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'PayDtlsPayDueDt',
      text: 'PayDtlsPayDueDt',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'PayDtlsPayInstr',
      text: 'PayDtlsPayInstr',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'RefDtlsContrRef',
      text: 'RefDtlsContrRef',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'RefDtlsInvEndDt',
      text: 'RefDtlsInvEndDt',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'SellerDtlsGstin',
      text: 'SellerDtlsGstin',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'SellerDtlsTrdNm',
      text: 'SellerDtlsTrdNm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ValDtlsStCesVal',
      text: 'ValDtlsStCesVal',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ExpDtlsInvForCur',
      text: 'ExpDtlsInvForCur',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListDiscount',
      text: 'ItemListDiscount',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'ItemListStateCes',
      text: 'ItemListStateCes',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'RefDtlsPrecInvDt',
      text: 'RefDtlsPrecInvDt',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'RefDtlsPrecInvNo',
      text: 'RefDtlsPrecInvNo',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'RefDtlsRecAdvRef',
      text: 'RefDtlsRecAdvRef',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'TranDtlsEcmGstin',
      text: 'TranDtlsEcmGstin',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },


    {
      dataField: 'ValDtlsTotInvVal',
      text: 'ValDtlsTotInvVal',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListUnitPrice',
      text: 'ItemListUnitPrice',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListBchDtlsNm',
      text: 'ItemListBchDtlsNm',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListTotItemVal',
      text: 'ItemListTotItemVal',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ValDtlsCesNonAdVal',
      text: 'ValDtlsCesNonAdVal',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListCesNonAdval',
      text: 'ItemListCesNonAdval',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListBchDtlsWrDt',
      text: 'ItemListBchDtlsWrDt',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    },

    {
      dataField: 'ItemListBchDtlsExpDt',
      text: 'ItemListBchDtlsExpDt',
      // title: (cell, row, rowIndex, colIndex) => `${row.Name}`,
      // style: (cell, row, rowIndex, colIndex) => {
      //   const backgroundColor = row.ID > 0 ? 'white' : 'blue';
      //   return { backgroundColor };
      // }
    }

    ];
    return (
      <div>
      {
        this.props.data &&
          <div>
            <BootstrapTable
              keyField="ID"
              data={this.props.data}
              columns={columns}
              cellEdit={cellEditFactory({ mode: 'click', afterSaveCell })}
            />
          </div>
      }
      </div>
    )
  }
}
export default BootTable
