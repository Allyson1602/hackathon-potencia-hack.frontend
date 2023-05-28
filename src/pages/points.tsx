import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { useState } from "react";
import pointsBoy from "../assets/images/points-boy.png";
import pointsBag from "../assets/images/points-bag.png";
import ifoodLogo from "../assets/images/partners/ifood.png";
import coopLogo from "../assets/images/partners/coop.png";
import paoAcucarLogo from "../assets/images/partners/pao-acucar.png";
import assaiLogo from "../assets/images/partners/assai.png";

const Points: React.FC = () => {
    const [partners, setPartners] = useState<any[]>([
        {
            id: 1,
            logo: ifoodLogo,
            name: 'Ifood',
            description: 'Troque pontos por cupons'
        },{
            id: 2,
            logo: coopLogo,
            name: 'Coop',
            description: 'Junte pontos para ganhar desconto'
        },{
            id: 3,
            logo: assaiLogo,
            name: 'Assaí',
            description: 'Troque pontos por cupons'
        },{
            id: 4,
            logo: paoAcucarLogo,
            name: 'Pão de Açúcar',
            description: 'Junte pontos para trocar por produtos'
        }
    ]);

    return (
        <Box sx={{
            padding: (theme) => theme.spacing(2.5),
        }}>
            <Stack direction='row' justifyContent='center'>
                <img src={pointsBoy} alt="Edu points" style={{
                    width: '250px'
                }} />
            </Stack>

            <Box pt={4}>
                <Box>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={{
                            fontWeight: '700',
                            fontSize: '16px',
                            lineHeight: '20px',
                        }}>Você possui 1.310 pontos</Typography>

                        <img src={pointsBag} alt="Edu points" style={{width: '25px'}} />    
                    </Stack>
                    
                    <Typography sx={{
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '17px',
                    }}>Troque seus pontos com nossos parceiros</Typography>
                </Box>

                <Box>
                    {partners?.length > 0 && partners.map(partner => (
                        <Card key={partner.id} sx={{
                            marginTop: (theme) => theme.spacing(2),
                            border: '1px solid #ECE1E1'
                        }}>
                            <CardContent>
                                <Stack direction='row' alignItems='center' spacing={2}>
                                    <img src={partner.logo} alt={partner.name} />

                                    <Stack>
                                        <Typography sx={{
                                            fontWeight: '700',
                                            fontSize: '14px',
                                            lineHeight: '17px',
                                        }}>{partner.name}</Typography>

                                        <Typography sx={{
                                            fontWeight: '400',
                                            fontSize: '12px',
                                            lineHeight: '15px',
                                        }}>{partner.description}</Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Points;