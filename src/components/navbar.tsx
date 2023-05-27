import logoMenu from "../assets/images/logo-menu.svg";
import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { ContentCut } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '50%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: '0',
    top: '0',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 1, 1),
        paddingRight: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Navbar: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <div>
                        <img src={logoMenu} alt="logo" style={{ width: '50px' }} />
                    </div>
                    
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
                    
                    <Search>
                        <StyledInputBase placeholder="procurar..." />

                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                    </Search>
                    
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