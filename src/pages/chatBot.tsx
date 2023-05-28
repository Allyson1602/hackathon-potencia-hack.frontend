import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Stack, Theme, Typography } from "@mui/material";


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
        <Box>
            <Typography sx={{
                fontWeight: '700',
                fontSize: '18px',
                lineHeight: '22px',
            }}>
                Olá, eu sou o Edu e vou te ajudar!
            </Typography>
            <section>
                {chats &&
                    chats.length &&
                    chats.map((chat, index) => (
                        <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                            <span>{chat.content}</span>
                        </p>
                    ))}
            </section>

            <div className={isTyping ? "" : "hide"}>
                <p>
                    <i>{isTyping ? "Typing" : ""}</i>
                </p>
            </div>

            <form onSubmit={chat}>
                <input
                    type="text"
                    name="message"
                    value={message}
                    placeholder="Digite aqui..."
                    onChange={(e) => setMessage(e.target.value)}
                />
            </form>
        </Box>
    );
};

export default ChatBot;
