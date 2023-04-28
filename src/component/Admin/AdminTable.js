import * as React from 'react';
import { useState, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteApi } from '../../app/slice/apiSlice';
import { useDispatch } from 'react-redux';
import './AdminPanel.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export default function AdminTable() {

    const dispatch = useDispatch();
    const {data, loading} = useSelector((state) => state.api)

   



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Discription</StyledTableCell>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>Rating</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
            
          </TableRow>   
        </TableHead>
        <TableBody>
          {data.map((element) => (
            <StyledTableRow key={element.id}>
              <StyledTableCell sx={{ width: '150px' }}><span className='table-img'><img src={element.image} /></span></StyledTableCell>
              <StyledTableCell sx={{ width: '350px' }}> {element.title} </StyledTableCell>
              <StyledTableCell sx={{ width: '700px' }}> {element.description} </StyledTableCell>
              <StyledTableCell sx={{ width: '150px' }}>{element.category}</StyledTableCell>
              <StyledTableCell sx={{ width: '150px' }}>{element.rating.rate} ({element.rating.count})</StyledTableCell>
              <StyledTableCell sx={{ width: '150px' }}>Rs.{element.price}</StyledTableCell>
              <StyledTableCell sx={{ width: '150px' }}><EditIcon className='edit-icon' /><DeleteIcon className='delete-icon' onClick={() => dispatch(deleteApi(element.id))}/></StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}