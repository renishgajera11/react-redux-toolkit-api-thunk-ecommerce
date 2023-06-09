import React, { useState } from 'react'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import './register.css'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../app/slice/authSlice';
import registerimg from '../../Images/register-img.png' 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Register = () => {

    const {user} = useSelector((state)=>state.register)
    console.log(user);

    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [password, setPassword] = useState()
    const [cnfpassword, setCnfPassword] = useState()
    const [showPassword, setShowPassword] = useState(false);
    const [showcnfPassword, setShowcnfPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowcnfPassword = () => setShowcnfPassword((show) => !show);

    const userDetail = { name: name, number: number, password: password }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChangeName = (e) => {
        const regex = /^[A-Za-z]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
          setName(e.target.value);
        }
      };
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
        if (!name || !number || !password || !cnfpassword) {
            alert('insert data')
        }else if(!(password === cnfpassword)){
            alert('password not matched')
        } else{

            if(user){
                const checkNumber = user.filter((element)=>{
                    return element.number==number
                });

                if(checkNumber.length !== 0){
                    alert('mobile number already register')
                }else{
                    dispatch(registerUser(userDetail))
                    setName('');
                    setNumber('')
                    setPassword('')
                    setCnfPassword('')
                    navigate('/login') 
                }
            }



            
        }
    }





    return (
        <div className='register'>

            <div className='container register-container'>

                <div className='register-img'><img src={registerimg}></img></div>

                <FormControl required className='form'>

                    <table className='Table'>

                    

                        <tbody>
                            <tr>
                                <td className='text-center p-4'><h2>Register</h2></td>
                            </tr>
                            <tr>
                                <td className='p-3'>
                                    <TextField
                                        id="outlined-basic"
                                        label="Name"
                                        autoComplete='off'
                                        variant="outlined"
                                        className='bg-color field'
                                        placeholder="Enter Name"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        InputProps={{ pattern: "[a-z]" }}

                                        value={name} onChange={(e) => handleChangeName(e)}
                                    />
                                </td>

                                
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
                            <td className='p-3'>
                                
                                <TextField
                                    id="outlined-adornment-password"
                                    className='bg-color field'
                                    placeholder="Re-Enter Password"
                                    type={showcnfPassword ? 'text' : 'password'}
                                    label="Re-Enter Password"
                                    inputProps={{ maxLength: 15, minLength:6 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowcnfPassword}
                                                    edge="end"
                                                >
                                                    {showcnfPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    value={cnfpassword} onChange={(e) => setCnfPassword(e.target.value)}
                                />
                        
                        </td>
                            </tr>



                            <tr>
                                <td className=' p-3 text-center' colSpan="5">
                                   
                                    <Button variant='contained' onClick={submitHandler}>Submit</Button>

                                    <Link to='/login' className='link ms-4'>Already have an account? SignIn here.</Link>

                                </td>
                            </tr>


                        </tbody>

                    </table>

                </FormControl>

            </div>

        </div>
    )
}

export default Register
