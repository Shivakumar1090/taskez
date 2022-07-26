import { Box, FormGroup, InputBase,FormControlLabel,Checkbox } from '@mui/material';
import Divider from '@mui/material/Divider';
import './style.css';

const SignupForm = () => {
    return ( 
        <div style={{margin: '10px' , width: '70%' ,marginLeft: 'auto' , marginRight: 'auto'}}>
            <FormGroup>
                <Box marginTop='15px' marginBottom='10px'>
                    <Divider style={{background: 'rgba(64, 145, 223, 0.12)'}}/>
                </Box>
                <InputBase placeholder='Full Name' className='inputs'></InputBase>
                <InputBase placeholder='Email' className='inputs'></InputBase>
                <InputBase placeholder='Password' className='inputs'></InputBase>
                <button className='btn'>Signup</button>
                <FormControlLabel 
                    control={<Checkbox style={{color: '#329C89'}} size='small' defaultChecked/>} 
                    style = {{color: 'rgba(26, 59, 88, 0.61)', marginTop: '10px'}}
                    label="Remember me"
                />
            </FormGroup>
            
        </div>
     );
}
 
export default SignupForm;