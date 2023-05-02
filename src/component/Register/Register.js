import React, { useState } from 'react'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './register.css'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../app/slice/authSlice';

const Register = () => {

    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [password, setPassword] = useState()
    const [cnfpassword, setCnfPassword] = useState()
    const [showPassword, setShowPassword] = useState(false);

    const userDetail = {name:name , mNumber:number, password:password}

    const dispatch = useDispatch()


    const submitHandler = (e) => {
        e.preventDefault();
        if(!name || !number || !password || !cnfpassword ){
            alert('insert data')
        }else{
        dispatch(registerUser(userDetail))
        setName('');
        setNumber('')
        setPassword('')
        setCnfPassword('')
    }}





    return (
        <div className='register'>

            <FormControl required className='form'>

                <table className='Table mt-5'>

                    <tbody>
                        <tr>
                            <td className='p-3'>
                                <TextField
                                    id="outlined-basic"
                                    label="Name"
                                    variant="outlined"
                                    className='bg-color'
                                    placeholder="Enter Name"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}

                                    value={name} onChange={(e) => setName(e.target.value)}
                                />
                            </td>

                            <td className='p-3' >
                                <TextField
                                    id="outlined-basic"
                                    label="Mobile-Number"
                                    variant="outlined"
                                    type='text'
                                    className='bg-color'
                                    placeholder="Enter Mobile Number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={number} onChange={(e) => setNumber(e.target.value)}
                                />
                            </td>

                        </tr>

                        <tr>

                            <td className='p-3'>
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    variant="outlined"
                                    type='password'
                                    className='bg-color'
                                    placeholder="Enter Password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                />
                            </td>
                         


                            <td className='p-3'>
                                <TextField
                                    id="outlined-password-input"
                                    label="Re-Enter Password"               
                                    variant="outlined"
                                    type='password'
                                    className='bg-color'
                                    placeholder="Re-Enter Password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={cnfpassword} onChange={(e) => setCnfPassword(e.target.value)}
                                />
                            </td>

                        </tr>



                        <tr>
                            <td className=' p-3 text-center' colSpan="5">
                                {/* { */}
                                {/* update 
                                    ?  */}
                                <Button variant='contained' onClick={submitHandler}>Submit</Button>

                                {/* <Button variant='contained' onClick={updateHandler}>Update</Button> */}
                                {/* } */}

                            </td>
                        </tr>


                    </tbody>

                </table>

            </FormControl>

        </div>
    )
}

export default Register
