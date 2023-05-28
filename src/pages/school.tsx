import { Box, Button, Card, CardContent, CardMedia, Typography, Stack, LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import schoolImg from '../assets/images/escola.png';
import { useState } from "react";

const School: React.FC = () => {
    const navigate = useNavigate();
    const [progress] = useState(65);

    return (
        <Box>
            <Box sx={{
                padding: (theme) => theme.spacing(2),
                paddingTop: '10px'
            }}>
                <Card sx={{
                    boxShadow: '0px 4px 4px rgba(127, 168, 123, 0.25)',
                    padding: (theme) => theme.spacing(0, 1),
                    border: '1px solid #ece1e166'
                }}>
                    <CardMedia sx={{
                        display: 'flex',
                        padding: (theme) => theme.spacing(3, 0, 1, 0)
                    }}>
                        <Typography sx={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '17px',
                            textAlign: 'center',
                        }}><b>E.E Antonio de almeida </b></Typography>

                    </CardMedia>

                    <CardContent sx={{
                        padding: '0'
                    }}>
                        <Typography sx={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '17px',
                        }}>Uma escola na periferia de Guarulhos que tem 450 alunos no ensino fundamental e médio</Typography>
                        <Box sx={{
                            paddingTop: '10px'
                        }}>
                            <center>
                                <Button sx={{ width: '164px', alignSelf: 'center' }} variant="contained" onClick={() => { navigate('/app/plan') }}>
                                    Doação
                                </Button>
                            </center>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Box>
                <center><img style={{ width: '30%', height: '30%' }} src={schoolImg} alt="Escola" /></center>
                <Typography sx={{
                    fontWeight: '700',
                    fontSize: '14px',
                    lineHeight: '17px',
                    textAlign: 'center',
                }}>E.E Antonio de almeida</Typography>
            </Box>
            <Typography sx={{
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '17px',
                textAlign: 'center',
                padding: (theme) => theme.spacing(2),
            }}>A escola está precisando de uma quadra nova para que todas as crianças tenham aulas de educação física novamente e possa correr feliz por ela!</Typography>
            <Box>
                <center>
                    <Typography sx={{
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '17px',
                        padding: (theme) => theme.spacing(2),
                    }}>Meta do objetivo:</Typography>
                </center>
                <Box sx={{ width: '90%', padding: (theme) => theme.spacing(2),}}>
                    <Stack direction='row' alignItems='center'>
                        <Box sx={{ width: '100%', mr: 1 }}>
                            <LinearProgress value={progress} variant="determinate" />
                        </Box>
                        <Box>
                            <Typography>{progress}%</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default School;