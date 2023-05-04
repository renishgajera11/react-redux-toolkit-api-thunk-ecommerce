import React, { useState } from 'react'
import './AdminPanel.css'
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
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { createApi} from '../../app/slice/apiSlice';
import {useDispatch, useSelector } from 'react-redux';
import { updateApi } from '../../app/slice/apiSlice';
import Header from '../Header/Header';

const baseURl = "../../../public"

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





const AdminPanel = () => {

    const dispatch = useDispatch()
    const {data,loading} = useSelector((state)=>state.api)


    const [title, setTitle] = useState()
    const [discription, setDiscription] = useState()
    const [categorys, setCategorys] = useState()
    const [rate, setRate] = useState()
    const [count, setCount] = useState()
    const [price, setPrice] = useState()
    const [img, setImg] = useState()
    const [id ,setId] =useState()
    const [update, setUpdate] = useState(true)

    console.log(img);

    const productdata = { title: title, description: discription, category: categorys,  rate: rate, count: count , image: `/img/${img}`, price:price,quantity: 1 ,id}

    console.log(productdata);

    const submitHandler = (e) =>{
        e.preventDefault();

        if(!title || !discription || !categorys || !rate || !count || !price){
            alert('insert data')
        }else{
        dispatch(createApi(productdata))
        setTitle('');
        setDiscription('')
        setCategorys('')
        setRate('')
        setCount('')    
        setPrice('')
       
    
    }  
    }

    const editHandler = (e) =>{
        setId(e.id)
        setTitle(e.title);
        setDiscription(e.description)
        setCategorys(e.category)
        setRate(e.rate)
        setCount(e.count)
        setPrice(e.price)
        setUpdate(false)

        
    }
console.log(categorys);
    const updateHandler = (e) =>{
        e.preventDefault();

        if(!title || !discription || !categorys || !rate || !count || !price){
            alert('insert data')
        }else{
        dispatch(updateApi(productdata))
        setTitle('');
        setDiscription('')
        setCategorys('')
        setRate('')
        setCount('')
        setPrice('')
        setUpdate(true)
       
    
    } }

   

    const category = [
        {
            value:"select",
            label:"select",
        },
        {

            value: "men's clothing",
            label: "men's clothing",
        },
        {
            value: "women's clothing",
            label: "women's clothing",
        },
        {
            value: "jewelery",
            label: "jewelery",
        },
        {
            value: "electronics",
            label: "electronics",
        },
    ];
    return (

        <>

        <Header/>

        <div className='adminpanel'>

            <div className='container'>

                <div className='text-center'><div className='contactus-heading'><h2>Add Product</h2></div></div>

                <FormControl required>

                    <table className='Table mt-5'>

                        <tbody>
                            <tr>
                                <td className='p-3'>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Title" 
                                        variant="outlined" 
                                        placeholder="Title"
                                        InputLabelProps={{
                                        shrink: true,
                                        }} 
                                        className='bg-color'
                                       
                                        value={title} onChange={(e) => setTitle(e.target.value)} />
                                </td>
                                <td className='p-3'>
                                    <TextField
                                        id="outlined-select"
                                        select
                                        label="Category"
                                        value={categorys}
                                        // defaultValue="select"
                                        onChange={(e) => setCategorys(e.target.value)}
                                        className='select-item bg-color'

                                    >
                                        {category.map((option) => (
                                            <MenuItem key={option.value} value={option.value} >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </td>
                                <td className='p-3' colSpan="3">
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Discription" 
                                        variant="outlined" 
                                        className='discription bg-color'
                                        placeholder="Discription"
                                        InputLabelProps={{
                                        shrink: true,
                                        }} 
                                       
                                        value={discription} onChange={(e) => setDiscription(e.target.value)} />
                                </td>
                            </tr>

                            <tr>

                                <td className='p-3'>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Price" 
                                        variant="outlined" 
                                        placeholder="Price"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                        className='bg-color'
                                        value={price} onChange={(e) => setPrice(e.target.value)} />
                                </td>
                                <td className='p-3'>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Rating" 
                                        variant="outlined"
                                        placeholder="Rating"
                                        InputLabelProps={{
                                        shrink: true,
                                        }} 
                                        className='bg-color'
                                        value={rate} onChange={(e) => setRate(e.target.value)} />
                                </td>
                                <td className='p-3'>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Rating-Count" 
                                        variant="outlined"
                                        placeholder="Rating-Count"
                                        InputLabelProps={{
                                        shrink: true,
                                        }} 
                                        className='bg-color'
                                        value={count} onChange={(e) => setCount(e.target.value)} />
                                </td>
                                <td className='p-3'>
                                    {/* <span className='me-2'>Select Image</span> */}
                                    {/* <Button variant="contained" component="label" onChange={(e) => setImg(e.target.file)}>
                                        Upload<input name='file' type="file" />
                                    </Button> */}
                                   
                                        <input name='file' type="file" onChange={(e) => setImg(e.target.files[0].name)}/>
                                    
                                </td>
                              
                            </tr>   

                            <tr>
                                <td className=' p-3 text-center' colSpan="5">
                                    { update ? <Button variant='contained' onClick={submitHandler}>Submit</Button> : <Button variant='contained' onClick={updateHandler}>Update</Button>}
                                </td>
                            </tr>


                        </tbody>

                    </table>

                </FormControl>


            </div>

            <div className='mt-5'>


                <TableContainer component={Paper}>
                    <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>No.</StyledTableCell>
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
                            {data.map((element) => {
                                let index = data.findIndex(
                                        (item) => item.id === element.id,
                                    )
                                    console.log(window.location.origin)
                                
                                return (

                                <StyledTableRow key={element.id}>
                                    <StyledTableCell>{index + 1 }</StyledTableCell>
                                    <StyledTableCell sx={{ width: '150px' }}><span className='table-img'><img src={window.location.origin + element.image} /></span></StyledTableCell>
                                    <StyledTableCell sx={{ width: '350px' }}> {element.title} </StyledTableCell>
                                    <StyledTableCell sx={{ width: '700px' }}> {element.description} </StyledTableCell>
                                    <StyledTableCell sx={{ width: '150px' }}>{element.category}</StyledTableCell>
                                    <StyledTableCell sx={{ width: '150px' }}>{element.rate} ({element.count})</StyledTableCell>
                                    <StyledTableCell sx={{ width: '150px' }}>Rs.{element.price}</StyledTableCell>
                                    <StyledTableCell sx={{ width: '150px' }}><EditIcon className='edit-icon' onClick={() => editHandler(element)}/><DeleteIcon className='delete-icon' onClick={() => dispatch(deleteApi(element.id))} /></StyledTableCell>

                                </StyledTableRow>
                            )})}
                        </TableBody>
                    </Table>
                </TableContainer>
                                    
            </div>


                        {/* <img src={img1} />                */}


        </div>
        </>
    )
}

export default AdminPanel
