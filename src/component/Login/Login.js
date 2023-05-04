import React, { useState } from 'react'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import '../Register/register.css'
import { useDispatch } from 'react-redux';
import loginimg from '../../Images/login-img.png' 
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addItem } from '../../app/slice/loginSlice';

const Login = () => {

    const {user} = useSelector((state)=>state.register)
    console.log(user);

    const [number, setNumber] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const userLoginDetail = { number: number, password: password }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChangeNumber = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
          setNumber(e.target.value);
        }
      };
    const handleChangePassword = (e) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;
        if (e.target.value === "" || regex.test(e.target.value)) {  
          setPassword(e.target.value);
        }
      };


    const submitHandler = (e) => {
        e.preventDefault();
        if ( !number || !password ) {
            alert('insert data')
        
        } else {

            if(user && user.length){
                const checkUser = user.filter((element)=>{
                    return element.number === number && element.password === password
                            
                });console.log(checkUser);
                if(checkUser.length === 0){
                    alert("invalid user")
                }else{
                   dispatch(addItem(checkUser))
                    setNumber('')
                    setPassword('')
                    navigate('/')
                }
            }


        }
    }





    return (
        <div className='register'>

            <div className='container register-container'>

                <FormControl required className='form'>

                    

                    <table className='Table'>

                        <tbody>

                        <tr>
                            <td className='text-center p-4'><h2>Log In</h2></td>
                        </tr>

                            <tr>
                            <td className='p-3' >
                                    <TextField
                                        id="outlined-basic"
                                        label="Mobile-Number"
                                        variant="outlined"
                                        autoComplete='off'
                                        type='text'
                                        className='bg-color field'
                                        placeholder="Enter Mobile Number"
                                        inputProps={{ maxLength: 10, minLength:10 }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={number} onChange={(e) => handleChangeNumber(e)}
                                    />
                                </td>

                            </tr>

                            <tr>

                                <td className='p-3'>
                                    
                                        <TextField
                                            id="outlined-adornment-password"
                                            className='bg-color field'
                                            placeholder="Enter Password"
                                            type={showPassword ? 'text' : 'password'}
                                            label="Password"
                                            inputProps={{ maxLength: 12, minLength:8 }}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            InputProps={{
                                                
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            value={password} onChange={(e) => setPassword(e.target.value)}
                                        />
                                    
                                </td>

                            </tr>

                            <tr>
                                <td className=' p-3 text-center' colSpan="5">
                                
                                    <Button variant='contained' onClick={submitHandler}>Submit</Button>

                                    <Link to="/register" className='link ms-4'>Don't have an account? Register here.</Link>


                                </td>
                            </tr>


                        </tbody>

                    </table>

                </FormControl>
                
                <div className='register-img'><img src={loginimg}></img></div>


            </div>

        </div>
    )
}

export default Login
