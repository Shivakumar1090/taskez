import { AppBar, Typography } from "@mui/material";

const Navbar = () => {
    return ( 
        <div>
            <AppBar elevation={0} style={{background: '#FEFEFE' , color: '#1A3B58', textAlign: 'center', padding: '10px' }}>
                <Typography fontSize='24px' fontWeight='600'>.taskez</Typography>
            </AppBar>
        </div>
     );
}
 
export default Navbar;