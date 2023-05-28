import { Box, CardContent,Typography } from "@mui/material";
import deliveryBoy from '../assets/images/delivery-boy.png';

const SuccessfullPayment: React.FC = () => {
    return (
        <Box>
            <Box sx={{
                padding: (theme) => theme.spacing(2)
                }}>
                <CardContent>
                <center><img style={{width: '70%', height: '70%'}} src={deliveryBoy} alt="Escola" /></center>
                <Typography sx={{
                            color: 'rgba(0, 0, 0, 0.6)',
                            letterSpacing: '0.25px',
                            fontWeight: '700',
                            fontSize: '14px',
                            lineHeight: '20px',
                            justifyContent: 'center',
                            padding: (theme) => theme.spacing(0, 2.5),
                        }}><center>Pagamento efetuado com sucesso!</center></Typography>
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
                            padding: (theme) => theme.spacing(3, 2.5),
                        }}>Resgate estes pontos com os nossos parceiros.
                        </Typography>
                </CardContent>
            </Box>
        </Box>
    );
};

export default SuccessfullPayment;