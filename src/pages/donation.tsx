import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Donation: React.FC = () => {
    const navigate = useNavigate();
    const [schools, setSchools] = useState<any[]>([
        {
            id: 1,
            name: 'E.E Antonio de almeida',
            description: 'Uma escola na periferia de Guarulhos que tem 450 alunos no ensino fundamental e médio'
        },
        {
            id: 2,
            name: 'E.E Ida rosa de barros',
            description: 'Uma escola em São Paulo que tem 607 alunos no ensino fundamental ciclo 1 e 2'
        },
        {
            id: 3,
            name: 'E.E João barros',
            description: 'Uma escola na periferia de Campinas que tem 750 alunos no ensino fundamental e médio'
        },
        {
            id: 4,
            name: 'E.E Getulio rosário',
            description: 'Uma escola em Santa Catarina que tem 458 alunos no ensino fundamental ciclo 1'
        },
    ]);

    return (
        <Box sx={{
            padding: (theme) => theme.spacing(2.5),
        }}>
            <Typography sx={{
                fontWeight: '700',
                fontSize: '18px',
                lineHeight: '22px'
            }}>Escolha uma escola para doar!</Typography>

            <Box sx={{
                paddingTop: (theme) => theme.spacing(2),
            }}>
                {schools?.length > 0 && schools.map((school) => (
                    <Card
                        key={school.id}
                        onClick={(e: any) => {
                            e.stopPropagation();
                            navigate('/app/school');
                        }}
                        sx={{
                            boxShadow: '0px 4px 4px rgba(127, 168, 123, 0.25)',
                            border: '1px solid #ece1e166',
                            marginBottom: (theme) => theme.spacing(2),
                        }}
                    >
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

                            <Stack direction='row' justifyContent='center' sx={{
                                paddingTop: (theme) => theme.spacing(2),
                            }}>
                                <Button
                                    sx={{width: '120px'}}
                                    variant="contained"
                                    onClick={(e: any) => {
                                        navigate('/app/plan');
                                        e.stopPropagation();
                                    }}
                                >Doar</Button>
                            </Stack>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Donation;