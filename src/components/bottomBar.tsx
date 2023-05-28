import { Container, IconButton, Stack, Typography } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from "react-router-dom";
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';

const BottomBar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container sx={{
            position: 'fixed',
            bottom: '0',
            justifyContent: 'center',
            height: '65px',
            borderTop: '1px solid #ECE1E1',
            background: (theme) => theme.palette.common.white,
        }}>
            <Stack direction="row" sx={{
                justifyContent: 'space-between',
                height: '100%',
                alignItems: 'center',
            }}>
                <Stack>
                    <IconButton onClick={() => {navigate("/app")}} sx={{
                        flexDirection: 'column'
                    }}>
                        <HomeOutlinedIcon color="primary" />

                        <Typography sx={{
                            fontWeight: '400',
                            fontSize: '12px',
                            lineHeight: '15px',
                            color: (theme) => theme.palette.common.black
                        }}>Início</Typography>
                    </IconButton>
                </Stack>
                
                <Stack>
                    <IconButton onClick={() => {navigate('/app/chat')}} sx={{
                        flexDirection: 'column'
                    }}>
                        <TextsmsOutlinedIcon color="primary" />

                        <Typography sx={{
                            fontWeight: '400',
                            fontSize: '12px',
                            lineHeight: '15px',
                            color: (theme) => theme.palette.common.black
                        }}>IA Edu</Typography>
                    </IconButton>
                </Stack>
                
                <Stack>
                    <IconButton onClick={() => {navigate("/app/donation")}} sx={{
                        flexDirection: 'column'
                    }}>
                        <SearchOutlinedIcon color="primary" />

                        <Typography sx={{
                            fontWeight: '400',
                            fontSize: '12px',
                            lineHeight: '15px',
                            color: (theme) => theme.palette.common.black
                        }}>Buscar</Typography>
                    </IconButton>
                </Stack>
            </Stack>
        </Container>
    );
};

export default BottomBar;