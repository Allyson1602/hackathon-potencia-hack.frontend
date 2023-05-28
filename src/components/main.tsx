import { Box } from "@mui/material";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import BottomBar from "./bottomBar";

const Main: React.FC = () => {
    return (
        <Box sx={{position: 'relative'}}>
            <Navbar />

            <Box sx={{
                paddingTop: "100px"
            }}>
                <Outlet />
            </Box>

            <BottomBar />
        </Box>
    );
};

export default Main;