import { Box, Typography } from "@mui/material";


export function Landing() {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Typography variant="h1" style={{ fontSize: '4rem', fontWeight: 'bold' }}>Hello, World!</Typography>
        </Box>
    );
}
