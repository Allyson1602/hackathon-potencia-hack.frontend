import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import deliveryBoy from '../assets/images/delivery-boy.png';
import edudoarPrimary from '../assets/images/edudoar-primary.png';
import GoogleIcon from '@mui/icons-material/Google';
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    return (
        <Box p={2}>
            <Stack alignItems="center" gap={2} pt={4}>
                <img style={{
                    width: '175px'
                }} src={deliveryBoy} alt="Edu" />

                <img style={{
                    width: '165px'
                }} src={edudoarPrimary} alt="EduDoar" />
            </Stack>
            
            <Box pt={6}>
                <TextField
                    label="E-mail"
                    size="small"
                    fullWidth
                    placeholder="nome@mail.com"
                />
                
                <FormControl fullWidth size="small" variant="outlined" sx={{
                    marginTop: (theme) => theme.spacing(2),
                    marginBottom: (theme) => theme.spacing(1),
                }}>
                  <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="***************"
                  />
                </FormControl>

                <Typography color='primary' sx={{
                    fontWeight: '700',
                    fontSize: '14px',
                    lineHeight: '17px'
                }}>Esqueci a senha</Typography>

                <Button fullWidth variant="contained" onClick={() => navigate('/app')} sx={{
                    borderRadius: '24px',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '24px',
                    padding: (theme) => theme.spacing(1.5, 0),
                    margin: (theme) => theme.spacing(3, 0),
                }}>Entrar</Button>
            </Box>
            
            <Box>
                <Button fullWidth startIcon={<GoogleIcon />} variant="contained" sx={{
                    fontWeight: '500',
                    fontSize: '20px',
                    lineHeight: '23px',
                    color: 'rgba(0, 0, 0, 0.54)',
                    padding: (theme) => theme.spacing(1.5, 0),
                    backgroundColor: (theme) => theme.palette.common.white,
                    marginBottom: (theme) => theme.spacing(3),
                    '&:hover': {
                        backgroundColor: (theme) => theme.palette.secondary.light,
                    }
                }}>Continue with Google</Button>
            </Box>
            
            <Box>
                <Typography color='primary' sx={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#393636',
                    textAlign: 'center',
                }}>Ainda não tem uma conta? <Link component={RouterLink} to='' color="primary" sx={{fontWeight: '700'}}>Criar uma conta</Link></Typography>
            </Box>
        </Box>
    );
};

export default Login;