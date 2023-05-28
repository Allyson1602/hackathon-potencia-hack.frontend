import { Box, Container, Drawer, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList, Stack, Typography } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from "react-router-dom";
import { ContentCut } from "@mui/icons-material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const BottomBar: React.FC = () => {
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = useState(false);

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
                    <IconButton onClick={() => {setOpenDrawer(true)}} sx={{
                        flexDirection: 'column'
                    }}>
                        <MenuOutlinedIcon color="primary" />

                        <Typography sx={{
                            fontWeight: '400',
                            fontSize: '12px',
                            lineHeight: '15px',
                            color: (theme) => theme.palette.common.black
                        }}>Menu</Typography>
                    </IconButton>
                </Stack>
                
                <Stack>
                    <IconButton onClick={() => {navigate("/app/school")}} sx={{
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
            
            <Drawer
                anchor={'bottom'}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100vh",
                        backgroundColor: (theme) => theme.palette.primary.light
                    }}
                >
                    <IconButton
                        onClick={() => setOpenDrawer(false)}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <MenuList
                        sx={{
                            marginTop: '2rem',
                        }}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <ContentCut fontSize="small" />
                            </ListItemIcon>

                            <ListItemText>Escola</ListItemText>
                        </MenuItem>
                        
                        <MenuItem>
                            <ListItemIcon>
                                <ContentCut fontSize="small" />
                            </ListItemIcon>

                            <ListItemText>Escola</ListItemText>
                        </MenuItem>
                        
                        <MenuItem>
                            <ListItemIcon>
                                <ContentCut fontSize="small" />
                            </ListItemIcon>

                            <ListItemText>Escola</ListItemText>
                        </MenuItem>
                    </MenuList>
                </Box>
            </Drawer>
        </Container>
    );
};

export default BottomBar;