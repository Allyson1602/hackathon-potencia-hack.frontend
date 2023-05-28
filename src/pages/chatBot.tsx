import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Card, CardActionArea, CardContent, CardMedia, Stack, Theme, Typography, InputAdornment } from "@mui/material";
import "./chatBot.css";
import { Block } from "@mui/icons-material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import deliveryBoy from "../assets/images/delivery-boy.png";

interface ChatMessage {
    role: string;
    content: string;
}

const ChatBot: React.FC = () => {
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState<ChatMessage[]>([]);
    const [isTyping, setIsTyping] = useState(false);

    const navigate = useNavigate();

    const chat = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { value: message } = (e.target as HTMLFormElement).message as HTMLInputElement;

        if (!message) return;
        setIsTyping(true);
        window.scrollTo(0, 1e10);

        setChats((prevChats) => [...prevChats, { role: "user", content: message }]);

        setMessage("");

        try {
            const response = await fetch("https://edudoar.herokuapp.com/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    User: "user",
                },
                body: JSON.stringify({ message }),
            });
            const data = await response.json();
            setChats((prevChats) => [...prevChats, { role: "assistant", content: data.reply }]);
            setIsTyping(false);
            window.scrollTo(0, 1e10);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box
            sx={{
                maxHeight: '410px',
                overflow: 'auto',
                padding: (theme) => theme.spacing(2.5),
            }}
        >
            <Box>
                <Stack direction='row' justifyContent='center'>
                    <img src={deliveryBoy} alt="delivery-boy" style={{width: "134px"}} />
                </Stack>

                <Typography sx={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '17px',
                    textAlign: 'center',
                    paddingTop: (theme) => theme.spacing(2),
                }}>
                    Olá, eu sou o Edu e vou te ajudar!
                </Typography>
            </Box>
            
            <section style={{}}>
                {chats?.length > 0 &&
                    chats.map((chat, index) => (
                        <Typography key={index} className={chat.role === "user" ? "user_msg" : ""} sx={{
                            margin: '15px 0',
                            background: '#D9D9D9',
                            borderRadius: '20px',
                            fontSize: '12px',
                            padding: '10px 15px',
                            width: '70%',
                            float: 'left',
                        }}>{chat.content}</Typography>
                    ))}
            </section>

            {isTyping && (
                <div style={{clear: 'both'}}>
                    <Typography sx={{
                        margin: '15px 0',
                        background: '#D9D9D9',
                        borderRadius: '20px',
                        fontSize: '12px',
                        padding: '10px 15px',
                        width: '70%',
                        float: 'left',
                    }}>{isTyping ? "Digitando..." : ""}</Typography>
                </div>
            )}

            <form onSubmit={chat} style={{
                width: 'calc(100% - 40px)',
                position: 'fixed',
                bottom: '75px',
                background: '#fff',
            }}>
                <TextField 
                    fullWidth
                    size="small"
                    type="text"
                    name="message"
                    value={message}
                    placeholder="Digite aqui..."
                    onChange={(e) => setMessage(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                            <ArrowForwardIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                />
            </form>
        </Box >
    );
};

export default ChatBot;
