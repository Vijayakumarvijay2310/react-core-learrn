import {Avatar, Button, Grid, Link, Paper, TextField, Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Login = ()=>{

    const paperStyle = {padding:20 ,height:"70vh",width:280,margin:"20px auto"}
    const avatarStyle = {backgroundColor:"#1bbd7e"}
    const gridStyle = {backgroundImage:"url('https://thumbs.dreamstime.com/b/healthy-food-delivery-modern-gadgets-male-hands-holding-smartphone-online-meal-ordering-app-healthy-food-delivery-198720074.jpg')"}
    const btnStyle = {margin:"0px 0"}
    
  return (
    <Grid style={gridStyle}>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                 <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign In</h2>
            </Grid>
            <TextField variant="standard" label="Username" placeholder="Enter username" fullWidth required/>
            <TextField variant="standard" label="Password" placeholder="Enter password" type="password" fullWidth required/>
            <FormControlLabel 
                control={
                <Checkbox 
                name="primary"
                color="primary"
                />
                } 
                label="Remember me" 
             />
            <Button type="submit" color="primary" style={btnStyle} variant="contained" fullWidth>SIGN IN</Button>
            <Typography>
                 <Link href="#">
                Forget password ?
            </Link>
            </Typography>
            <Typography>Do you have an account ?
            <Link href="#">
                Sign Up
                </Link>
            </Typography>
        </Paper>
    </Grid>
  )
}

export default Login;