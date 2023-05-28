import { Box, CardContent, Typography } from "@mui/material";
import pixPayment from '../assets/images/pix-payment.png';


const PixPayment: React.FC = () => {
    return (
        <Box>
            <Box sx={{
                padding: (theme) => theme.spacing(2),
                paddingTop: '240px',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${pixPayment})`,
            }}>
                <CardContent>
                <Typography sx={{
                            color: 'rgba(0, 0, 0, 0.6)',
                            letterSpacing: '0.25px',
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '20px',
                            padding: (theme) => theme.spacing(0, 2.5),
                        }}>Copie a chave pix abaixo e cole no aplicativo do seu banco</Typography>
                    <Box sx={{
                            color: 'rgba(0, 0, 0, 0.6)',
                            letterSpacing: '0.25px',
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '20px',
                            padding: (theme) => theme.spacing(2, 2.5),
                        }}>
                        <textarea 
                        defaultValue= "dbbf965d-677c-49ff-b9da-5131da15"
                        rows={1}
                        cols={32}
                        onFocus={e => e.target.select()}/>
                    </Box>
                </CardContent>
            </Box>
        </Box>
    );
};

export default PixPayment;