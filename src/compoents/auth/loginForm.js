import React,{useState} from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, InputBase } from '@mui/material';
import Divider from '@mui/material/Divider';
import './style.css';
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    return ( 
        <div style={{margin: '10px' , width: '70%' ,marginLeft: 'auto' , marginRight: 'auto'}}>
            <FormGroup>
                <Box marginTop='15px' marginBottom='10px'>
                    <Divider style={{background: 'rgba(64, 145, 223, 0.12)'}}/>
                </Box>
                <Box>
                    <h2 className='continuedHeading'>To be Continued</h2>
                    <h4 className='caption'>we need your Name  email</h4>
                </Box>
                <InputBase placeholder='Email' className='inputs' value={email} onChange={(e) => setEmail(e.target.value)}></InputBase>
                <InputBase placeholder='Password' className='inputs' value={password} onChange={(e) => setPassword(e.target.value)}></InputBase>
                <button className='btn'><Link to="/home" style={{"textDecoration":'none' , color: '#fff'}}>Login</Link></button>
                <FormControlLabel 
                    control={<Checkbox style={{color: '#329C89'}} size='small' defaultChecked/>} 
                    style = {{color: 'rgba(26, 59, 88, 0.61)', marginTop: '10px'}}
                    label="Remember me"
                />
            </FormGroup>
            
        </div>
     );
}
 
export default LoginForm;