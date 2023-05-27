import logoMenu from "../assets/images/logo-menu.svg";
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

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
    right: "0",
    top: "0",
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 1, 1),
        // vertical padding + font size from searchIcon
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
                    
                    <Search>
                        <StyledInputBase placeholder="procurar..." />

                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                    </Search>
                    
                    <div>
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
                            >
                                <MenuIcon />
                            </IconButton>

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
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;