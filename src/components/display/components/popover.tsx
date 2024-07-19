// import { useState } from 'react';
import { Box } from "@mui/material";

const HTMLPreview = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                opacity: 0.7,
                top: 0,
                right: 0,
                backgroundColor: 'white',
                width: 'calc(100vw * 0.2)',
                height: 'calc(100vh * 0.2)',
                transformOrigin: 'top right',
                ":hover": {
                    opacity: 1,
                    transform: 'scale(1.5)',
                },
        }}>
            <h1>About</h1>

            <p>My name is <strong>John Doe</strong> and I am a software engineer.</p>
        </Box>
    );
}

export default HTMLPreview;