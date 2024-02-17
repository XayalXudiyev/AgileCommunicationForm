import { AppBar, Box, Toolbar, Typography, Stack, IconButton } from '@mui/material';
import Logo from '/Logo.png';

const Header = () => {
    return (
        <AppBar position='' sx={{ backgroundColor: '#e4e4e4', color: 'black', width: '99%', margin: 'auto', boxShadow: 'none', paddingY: '1rem' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <Stack direction="column" alignItems="center" spacing={0} marginBottom='20px' >

                    <Typography variant="h6" component="div" sx={{ fontSize: '1.875rem' }}>
                        Agile Communication Framework{<Typography variant="h6" component="sup">™</Typography>}{<Typography variant="h6" component="span">(BETA)</Typography>}
                    </Typography>


                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Typography sx={{ fontSize: '1.125rem', }}>for Digital Transformation by</Typography>
                        <IconButton aria-label="logo" >
                            <img src={Logo} alt="Logo" width="130" />
                        </IconButton>
                    </Box>


                </Stack>
                <Stack spacing={2} >
                    <Typography sx={{ fontSize: '1.5rem' }}>Cheweek Project Sample for Frontend</Typography>

                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Header;


