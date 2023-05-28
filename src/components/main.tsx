import { Box } from "@mui/material";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
    return (
        <Box sx={{position: 'relative'}}>
            <Navbar />

            <Box sx={{
                paddingTop: "100px"
            }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Main;