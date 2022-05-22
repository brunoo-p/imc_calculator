import { Box, Container, Typography, Button } from "@mui/material";
import { NavLink } from 'react-router-dom';

const NotFound = () => (
    <>
        <Box
            sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                mt: 4,
                justifyContent: 'center'
            }}
        >
            <Container maxWidth="md">
                <Typography
                    align="center"
                    color="textPrimary"
                    variant="h3"
                >
                    Sorry this page was not found
                </Typography>
                
                <Box sx={{ textAlign: 'center' }}>
                    <img
                        alt="not found"
                        src="/static/images/not_found.png"
                        style={{
                        marginTop: 50,
                        display: 'inline-block',
                        maxWidth: '100%',
                        width: 560
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mt: 5 }}>
                    <Button
                        component={NavLink}
                        to="/app"
                        variant="contained"
                    >
                        Back to App
                    </Button>
                </Box>
            </Container>
        </Box>
    </>
);

export default NotFound;
