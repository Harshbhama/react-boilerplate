import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";

const editIcon = index => (
  <Button onClick={() => this.editComponent(index)}>
    <EditIcon color="primary" />
  </Button>
);

// const onEdit = (a,b, c) => {
//   console.log(a)
//   console.log(b)
//   console.log(c)

// }

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 0.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default class CustomizedTables extends React.Component {
  // const classes = useStyles();


  constructor(props){
    super(props)
    this.state={
      val: []
    }
    this.onEdit = this.onEdit.bind(this)
  }

  async componentDidMount(){
    var val = [
      {"ID": 0, "Name": 'Harsh'},
      {"ID": 2, "Name": 'Bhama'}
    ]

    this.setState({
      val: val
    })
  }

  




  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };

  async onEdit (a,b, c){
    console.log(a)
    console.log(b)
    console.log(c)

    console.log(this.state.val[c].b)
  
  }
render(){
  return (
    <TableContainer component={Paper}>
      <Table style={{maxWidth: '800px'}} aria-label="customized table">
        <TableHead>
          {/* <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Action&nbsp;(g)</StyledTableCell>
          </TableRow> */}
           <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.val.map((row, index) => (
            <StyledTableRow key={row.Name}>
              <StyledTableCell component="th" scope="row" contentEditable={true}>
                {row.ID}
              </StyledTableCell>
              {/* <StyledTableCell  style={row.fat ? { backgroundColor: 'red', color: 'white' } : { backgroundColor: 'black', color: 'white' }} title={row.calories} onEdit={() => onEdit(row.calories)} contentEditable={true} align="right">{row.calories}</StyledTableCell> */}
              {/* <StyledTableCell align="right">{row.fat}</StyledTableCell> */}
              <TextField
                name={row.Name}
                onChange={(e) => this.onEdit(e, 'Name', index)}
                value={row.Name}
              />
              
              <StyledTableCell>
                <Button onClick={() => this.props.onSubmitRow(row.name)} > Submit </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

      </Table>

    </TableContainer>
  );
      }
}