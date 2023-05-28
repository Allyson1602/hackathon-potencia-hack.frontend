import { AppBar, Box, Button, Container, Drawer, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Stack, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Theme } from '@mui/material/styles';
import { ContentCut } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <AppBar sx={{
            position: "absolute",
            justifyContent: "center",
            height: "100px",
            background: "linear-gradient(200deg, #6200eeb3, #6200ee 60%), #FFF"
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: (theme: Theme) => theme.spacing(3)
                }}>
                    <Stack direction='row' spacing={2}>
                        <IconButton onClick={() => navigate(-1)} size='small' sx={{color: '#FFF'}}>
                            <ArrowBackIosNewOutlinedIcon />
                        </IconButton>
                        
                        <Box sx={{
                            textAlign: 'start'
                        }}>
                            <Typography
                                style={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '17px'
                                }}
                            >Olá</Typography>

                            <Typography
                                style={{
                                    fontWeight: "700",
                                    fontSize: "24px",
                                    lineHeight: "29px"
                                }}
                            >Marina</Typography>
                        </Box>
                    </Stack>
                    
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >escola</Button>
                        
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >escola</Button>
                        
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >escola</Button>
                        
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >escola</Button>
                    </Box>
                    
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            color="inherit"
                            onClick={() => setOpenDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Drawer
                            anchor={'right'}
                            open={openDrawer}
                            onClose={() => setOpenDrawer(false)}
                        >
                            <Box
                                sx={{
                                    width: "100vw",
                                    height: "100%",
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

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            // onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                                <MenuItem>
                                    <Typography textAlign="center">escola</Typography>
                                </MenuItem>

                                <MenuItem>
                                    <Typography textAlign="center">escola</Typography>
                                </MenuItem>

                                <MenuItem>
                                    <Typography textAlign="center">escola</Typography>
                                </MenuItem>

                                <MenuItem>
                                    <Typography textAlign="center">escola</Typography>
                                </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;