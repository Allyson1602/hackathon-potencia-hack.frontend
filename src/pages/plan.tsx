import { Box, Button, Card, CardContent, Divider, Stack, Theme, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Plan: React.FC = () => {
    const navigate = useNavigate();
    const [school, setSchool] = useState({
        id: 2,
        name: 'E.E Ida rosa de barros',
        description: 'Uma escola em São Paulo que tem 607 alunos no ensino fundamental ciclo 1 e 2'
    });

    return (
        <Box sx={{
            padding: (theme) => theme.spacing(2.5),
        }}>
            <Box>
                <Box>
                    <Typography sx={{
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '17px'
                    }}>Você está ajudando a mudar o mundo com a seguinte escola:</Typography>
                </Box>
                <Box sx={{
                    paddingTop: (theme) => theme.spacing(2),
                }}>
                    <Card key={school.id} sx={{
                        boxShadow: '0px 4px 4px rgba(127, 168, 123, 0.25)',
                        border: '1px solid #ece1e166',
                        marginBottom: (theme) => theme.spacing(2),
                    }}>
                        <CardContent sx={{
                            padding: (theme) => theme.spacing(1) + " !important",
                        }}>
                            <Typography sx={{
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '17px'
                            }}>{school.name}</Typography>

                            <Typography sx={{
                                fontWeight: '400',  
                                fontSize: '12px',
                                lineHeight: '15px',
                                paddingTop: (theme) => theme.spacing(1),
                            }}>{school.description}</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            
            <Box sx={{
                paddingTop: (theme) => theme.spacing(1),
            }}>
                <Box>
                    <Typography sx={{
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '17px'
                    }}>Selecione o plano que irá pagar:</Typography>
                </Box>

                <Box sx={{
                    padding: (theme) => theme.spacing(2),
                }}>
                    <Card sx={{
                        border: '1px solid',
                        borderColor: (theme: Theme) => theme.palette.primary.main,
                        position: 'relative',
                        overflow: 'visible',
                    }}>
                        <CardContent sx={{ }}>
                            <Typography sx={{
                                fontWeight: '700',
                                fontSize: '14px',
                                lineHeight: '17px',
                                textAlign: 'center',
                                paddingBottom: (theme) => theme.spacing(1),
                            }}>Plano mensal</Typography>
                            
                            <Typography sx={{
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '17px',
                                paddingBottom: (theme) => theme.spacing(2),
                            }}>Faça a diferença todos os meses!</Typography>
                            
                            <Typography sx={{
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '17px'
                            }}>Junte-se a nós nessa jornada de transformação e  seja parte dessa mudança positiva.</Typography>

                            <Divider variant='middle' sx={{
                                backgroundColor: (theme) => theme.palette.secondary.light,
                                marginTop: (theme) => theme.spacing(2),
                            }} />
                            
                            <Typography sx={{
                                fontWeight: '700',  
                                fontSize: '16px',
                                lineHeight: '20px',
                                textAlign: 'center',
                                paddingTop: (theme) => theme.spacing(2),
                            }}>R$ 9,90</Typography>
                            
                            <Stack direction='row' justifyContent='center' sx={{
                                position: 'absolute',
                                left: '0',
                                bottom: '-16px',
                                width: '100%',
                            }}>
                                <Button sx={{width: '180px'}} variant="contained" onClick={() => {navigate('/app/card-payment')}}>Efetuar pagamento</Button>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card sx={{
                        border: '1px solid',
                        borderColor: (theme: Theme) => theme.palette.primary.main,
                        position: 'relative',
                        overflow: 'visible',
                        marginTop: (theme) => theme.spacing(4),
                    }}>
                        <CardContent sx={{ }}>
                            <Typography sx={{
                                fontWeight: '700',
                                fontSize: '14px',
                                lineHeight: '17px',
                                textAlign: 'center',
                                paddingBottom: (theme) => theme.spacing(1),
                            }}>Doação livre</Typography>
                            
                            <Typography sx={{
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '17px',
                                paddingBottom: (theme) => theme.spacing(2),
                            }}>Cada contribuição conta e faz a diferença!</Typography>

                            <Divider variant='middle' sx={{
                                backgroundColor: (theme) => theme.palette.secondary.light,
                                marginTop: (theme) => theme.spacing(2),
                            }} />
                            
                            <Typography sx={{
                                fontWeight: '700',  
                                fontSize: '16px',
                                lineHeight: '20px',
                                textAlign: 'center',
                                paddingTop: (theme) => theme.spacing(2),
                            }}>R$ 00,00</Typography>
                            
                            <Stack direction='row' justifyContent='center' sx={{
                                position: 'absolute',
                                left: '0',
                                bottom: '-16px',
                                width: '100%',
                            }}>
                                <Button sx={{width: '180px'}} variant="contained" onClick={() => {navigate('/app/pix-payment')}}>Efetuar pagamento</Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

export default Plan;