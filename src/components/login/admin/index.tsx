import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiTextField from '../../_coreComponent/mui/textfield';
import MuiButton from '../../_coreComponent/mui/button';
import { useNavigate } from 'react-router-dom';
import { setCurrentLogin } from '../../../store/auth/actions';

const AdminLogin = () => {
   const [email, setEmail] = React.useState("")
   const [password, setPassword] = React.useState("")
   const navigate = useNavigate();

   const redirectToAdminPanel = () => {
    navigate("/category"); 
};
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("email",email);
        console.log("pass",password);
 
        if(email === "neya@hotmail.com" && password === "admin123") {
          console.log("Giriş başarılı! Admin paneline yönlendiriliyorsunuz...");
          redirectToAdminPanel();
          setCurrentLogin(true)
      } else {
          console.log("Hatalı e-posta veya şifre.");
      }
         
        setEmail("")
        setPassword("")
      };
      
  return (
    <div>
     <Container>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
           <Typography component="h1" variant="h5" >
            <h6 className='text-subtitle font-raleway font-bold text-gray-700'>
              Admin Panel
            </h6>
           </Typography>
           <Box className='flex flex-col gap-3' component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> 
           <MuiTextField 
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            variant="outlined" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className='bg-white rounded-md '
            size='small'
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#454545',
                },
              },
            }}
            InputLabelProps={{
              style: { 
              color:"black"
              }
            }}
           />
           <MuiTextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="outlined" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className='bg-white rounded-md '
            size='small'
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#454545',
                },
              },
            }}
            InputLabelProps={{
              style: { 
              color:"black"
              }
            }}
           />
           <MuiButton 
            type="submit"
            size="small"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
           >
             Giriş yap
           </MuiButton>
           </Box>
         </Box>
     </Container>

    </div>
  )
}

export default AdminLogin