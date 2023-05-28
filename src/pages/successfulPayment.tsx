import { Box, Button, CardContent,Stack,Typography } from "@mui/material";
import deliveryBoy from '../assets/images/delivery-boy.png';
import { useNavigate } from "react-router-dom";

const SuccessfullPayment: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <Box sx={{
                padding: (theme) => theme.spacing(2)
                }}>
                <CardContent>
                <center><img style={{width: '70%', height: '70%'}} src={deliveryBoy} alt="Escola" /></center>
                <Typography component='center' sx={{
                            color: 'rgba(0, 0, 0, 0.6)',
                            letterSpacing: '0.25px',
                            fontWeight: '700',
                            fontSize: '14px',
                            lineHeight: '20px',
                            justifyContent: 'center',
                            padding: (theme) => theme.spacing(0, 2.5),
                        }}>Pagamento efetuado com sucesso!</Typography>
                </CardContent>
                <CardContent>
                <Typography sx={{
                            color: 'rgba(0, 0, 0, 0.6)',
                            letterSpacing: '0.25px',
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '20px',
                            justifyContent: 'center',
                            padding: (theme) => theme.spacing(0, 2.5),
                        }}>Parabéns, você recebeu <b>10</b> pontos com a doação para esta escola e o Edu ficou mais feliz!
                        </Typography>
                        <Typography sx={{
                            color: 'rgba(0, 0, 0, 0.6)',
                            letterSpacing: '0.25px',
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '20px',
                            justifyContent: 'center',
                            padding: (theme) => theme.spacing(3, 2.5, 0, 2.5),
                        }}>Resgate estes pontos com os nossos parceiros.
                        </Typography>
                </CardContent>

                <CardContent sx={{padding: '0'}}>
                    <Stack direction='row' justifyContent='center'>
                        <Button
                            sx={{width: '200px'}}
                            variant="contained"
                            onClick={(e: any) => {
                                navigate('/app/points');
                                e.stopPropagation();
                            }}
                        >Consultar pontos</Button>
                    </Stack>
                </CardContent>
            </Box>
        </Box>
    );
};

export default SuccessfullPayment;