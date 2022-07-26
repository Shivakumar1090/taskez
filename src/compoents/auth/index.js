import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import myImage from '../../image.png';
import './style.css';
import LoginForm from './loginForm';
import SignupForm from './signupform';
import { Button } from '@mui/material';

const box = {
    borderRadius : '55px',
    border: '2px solid rgba(26, 59, 88, 0.24)',
    paddingTop: '50px',
    paddingBottom: '70px',
    paddingLeft: '30px',
    paddingRight: '20px',
}

const AuthHome = () => {
    const [loginPage , setloginPage] = useState(true);

    return ( 
        <div>
            <Box marginTop='4%'>
            <Grid container spacing={2} >
                <Grid item xs={6} md={6} marginBottom='auto' marginTop='auto'>
                    <img src={myImage} alt='' width='600px'></img>
                </Grid>
                <Grid item xs={6} md={4} marginBottom='auto' marginTop='auto'>
                    <Box style={box}>
                        <Box style={{display:'flex'}}>
                            <Box>
                                <p className={loginPage ? 'ActiveHeading' : 'NonActiveHeading' } onClick={() => setloginPage(true)}>Log In</p>
                                {loginPage && <p className='line'></p>}
                            </Box>
                            <Box>
                                <p className={loginPage ? 'NonActiveHeading' : 'ActiveHeading'} onClick={() => setloginPage(false)}>Sign up</p>
                                {!loginPage && <p className='line'></p>}
                            </Box>
                        </Box>
                        <Box>
                            {
                                loginPage ? <LoginForm /> : <SignupForm/>
                            }
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </Box>
        </div>
     );
}
 
export default AuthHome;