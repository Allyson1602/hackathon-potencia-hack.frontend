import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Stack, Theme, Typography } from "@mui/material";
import backHome from '../assets/images/back-home.png';
import donationHome from '../assets/images/donation-home.png';
import school1 from '../assets/images/school1.png';
import school2 from '../assets/images/school2.png';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardStyled = styled(Card)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: "600px",
        margin: "0 auto",
    },
}));

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [schools, setSchools] = useState<any[]>([
        {
            image: school1,
            name: 'E.E Bertoni Junior Paraná'
        },
        {
            image: school2,
            name: 'E.E Aluizo de almeida São Paulo'
        }
    ]);
    const [reports, setReports] = useState<any[]>([
        {
            name: 'Ana Laura',
            uf: 'SP',
            text: 'Fiz diversas doações e me associei no plano mensal amei a facilidade para ajudar a sociedade!'
        },
        {
            name: 'Diego Carvalho',
            uf: 'MG',
            text: 'O plano mensal além de ajudar as escolas também oferece pontos que troco no Ifood.'
        }
    ]);

    return (
        <Box>
            <Box sx={{
                padding: (theme) => theme.spacing(2),
                paddingTop: '120px',
                backgroundImage: `url(${backHome})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
            }}>
                <CardStyled
                    sx={{
                        boxShadow: '0px 4px 4px rgba(127, 168, 123, 0.25)',
                        border: `1px solid`,
                        borderColor: (theme: Theme) => theme.palette.primary.main,
                    }}
                >
                    <CardContent>
                        <Typography sx={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '17px',
                            textAlign: 'center',
                        }}>EduDoar</Typography>

                        <Typography sx={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '17px',
                            paddingTop: (theme) => theme.spacing(1),
                            paddingBottom: (theme) => theme.spacing(3)
                        }}>Conecte-se para transformar a educação!</Typography>

                        <Typography sx={{
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '17px',
                            paddingBottom: (theme) => theme.spacing(2)
                        }}>Somos uma plataforma online que une doadores e escolas. Com nosso diferencial gamificado, acumule pontos e desbloqueie benefícios exclusivos.</Typography>
                    </CardContent>
                </CardStyled>
            </Box>
            
            <Box sx={{
                padding: (theme) => theme.spacing(2.5),
                paddingTop: 0,
            }}>
                <Box>
                    <Typography sx={{
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '22px',
                    }}>Doações</Typography>
                    
                    <Stack justifyContent='center' sx={{
                        paddingTop: (theme) => theme.spacing(4),
                    }}>
                        <img src={donationHome} alt="Doaçães" />
                    </Stack>
                    
                    <Box>
                        <Typography sx={{
                            color: 'rgba(0, 0, 0, 0.6)',
                            letterSpacing: '0.25px',
                            fontWeight: '500',
                            fontSize: '14px',
                            lineHeight: '20px',
                            padding: (theme) => theme.spacing(0, 2.5),
                        }}>Faça uma doação e ajude uma escola a impactar seus alunos na comunidade conheça os métodos para doar</Typography>
                    </Box>
                    
                    <Stack justifyContent='center' sx={{
                        padding: (theme) => theme.spacing(2, 0),
                    }}>
                        <Button sx={{width: '164px', alignSelf: 'center'}} variant="contained" onClick={() => {navigate('/app/donation')}}>Doação</Button>
                    </Stack>
                </Box>
                
                <Box>
                    <Typography sx={{
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '17px',
                        paddingBottom: (theme) => theme.spacing(1),
                    }}>Escolas apoiadas</Typography>

                    <Stack direction='row' spacing={1.5}>
                        {schools && schools.map((school) => (
                            <Card key={school.name} sx={{
                                boxShadow: '0px 4px 4px rgba(127, 168, 123, 0.25)',
                                height: '144px',
                                padding: (theme) => theme.spacing(0, 1),
                                border: '1px solid #ece1e166'
                            }}>
                                <CardActionArea onClick={() => {navigate('/app/school')}}>
                                    <CardMedia sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: (theme) => theme.spacing(3, 0, 1, 0)
                                    }}>
                                        <img style={{width: '100%', height: '72px'}} src={school.image} alt="Escola" />
                                    </CardMedia>
                                    
                                    <CardContent sx={{
                                        padding: '0'
                                    }}>
                                        <Typography sx={{
                                            fontWeight: '400',
                                            fontSize: '12px',
                                            lineHeight: '15px',
                                        }}>{school.name}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Stack>
                </Box>
                
                <Box sx={{
                    paddingTop: (theme) => theme.spacing(3),
                }}>
                    <Typography sx={{
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '17px',
                        paddingBottom: (theme) => theme.spacing(1),
                    }}>Relatos de quem já doou</Typography>

                    <Stack spacing={1.5}>
                        {reports && reports.map((report) => (

                            <Card key={report.name} sx={{
                                boxShadow: '0px 4px 4px rgba(127, 168, 123, 0.25)',
                                padding: (theme) => theme.spacing(0, 1),
                                border: '1px solid #ece1e166'
                            }}>
                                <CardContent sx={{
                                    padding: '0'
                                }}>
                                    <Typography sx={{
                                        fontWeight: '400',
                                        fontSize: '14px',
                                        lineHeight: '17px',
                                        paddingTop: (theme) => theme.spacing(1),
                                    }}>{report.name} - {report.uf}</Typography>
                                    
                                    <Typography sx={{
                                        fontWeight: '400',
                                        fontSize: '12px',
                                        lineHeight: '15px',
                                        paddingTop: (theme) => theme.spacing(1),
                                    }}>{report.text}</Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;