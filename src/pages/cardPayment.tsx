import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardPayment: React.FC = () => {
    const navigate = useNavigate();

    const [cardNumber, setCardNumber] = useState("");
    const [nameCard, setNameCard] = useState("");
    const [vality, setVality] = useState("");
    const [cvv, setCvv] = useState("");
    const [identity, setIdentity] = useState("");

    const savePayment = () => {
        return {
            cardNumber,
            nameCard,
            vality,
            cvv,
            identity
        }
    }

    return (
        <Box sx={{
            padding: (theme) => theme.spacing(2.5),
        }}>
            <Typography sx={{
                fontWeight: '700',
                fontSize: '14px',
                lineHeight: '17px',
                paddingBottom: (theme) => theme.spacing(1),
            }}>Cartão de crédito</Typography>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="Número do cartão"
                        fullWidth
                        size='small'
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        value={vality}
                        onChange={(e) => setVality(e.target.value)}
                        placeholder="Validade"
                        fullWidth
                        size='small'
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="CVV"
                        fullWidth
                        size='small'
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        value={nameCard}
                        onChange={(e) => setNameCard(e.target.value)}
                        placeholder="Nome do titular"
                        fullWidth
                        size='small'
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        value={identity}
                        onChange={(e) => setIdentity(e.target.value)}
                        placeholder="Cpf/cnjp do titular"
                        fullWidth
                        size='small'
                    />
                </Grid>
            </Grid>

            <Stack direction='row' justifyContent='center' sx={{
                marginTop: (theme) => theme.spacing(4),
                paddingTop: (theme) => theme.spacing(2),
            }}>
                <Button sx={{width: '250px'}} variant="contained" onClick={() => {navigate('/successful-payment')}}>Efetuar pagamento</Button>
            </Stack>
        </Box>
    );
};

export default CardPayment;