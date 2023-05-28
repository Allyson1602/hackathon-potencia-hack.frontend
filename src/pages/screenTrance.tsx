import { Box, IconButton, Stack } from "@mui/material";
import backTrance from "../assets/images/back-trance.png";
import ellipseTopTrance from "../assets/images/ellipse-top-trance.png";
import ellipseBottomTrance from "../assets/images/ellipse-bottom-trance.png";
import deliveryBoy from '../assets/images/delivery-boy.png';
import edudoarWhite from '../assets/images/edudoar-white.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

const ScreenTrance: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <Box sx={{
            height: '100vh',
            width: '100vw',
            position: 'relative',
            backgroundImage: `url(${backTrance})`,
        }}>
            <img src={ellipseTopTrance} alt="efeito design superior" style={{
                position: 'absolute',
                right: '0',
                top: '0',
            }} />
            
            <Stack justifyContent='center' height="100%">
                <Stack alignItems='center' gap={2}>
                    <img style={{
                        width: '175px'
                    }} src={deliveryBoy} alt="Edu" />

                    <img style={{
                        width: '165px'
                    }} src={edudoarWhite} alt="EduDoar" />

                    <IconButton onClick={() => {navigate('/login')}} sx={{
                        color: (theme) => theme.palette.common.white,
                    }}>
                        <ArrowForwardIcon />
                    </IconButton>
                </Stack>
            </Stack>

            <img src={ellipseBottomTrance} alt="efeito design inferior" style={{
                position: 'absolute',
                left: '0',
                bottom: '0',
            }} />
        </Box>
    );
};

export default ScreenTrance;