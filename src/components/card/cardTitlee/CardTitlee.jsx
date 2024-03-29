import { Box, Button, Chip, IconButton, MenuItem, Select, Stack, Typography } from '@mui/material'
import React from 'react'
import PageView from '/Page-View.png'

const CardTitle = () => {

    return (
        <Box>
            

            <Stack direction="row" sx={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: "start", gap: '6px' }}>
                <IconButton aria-label="logo" sx={{ gap: '4px' }}>
                    <img src={PageView} alt="Logo" width="30" />
                    <Typography variant='body1' sx={{ color: 'black', fontWeight: '700', fontSize: '1rem' }}>Page View</Typography>
                </IconButton>
                <Button
                    variant='contained'
                    sx={{
                        backgroundColor: '#6c757d',
                        fontSize: '1.125rem',
                        borderRadius: '5px',
                        ":hover": {
                            backgroundColor: '#6c757d',
                        },
                        height: '23px',
                    }}>Issue Management </Button>
                <select name="" id="" style={{ height: '20px', borderRadius: '5px', paddingLeft: '3px' }}>
                    <option value="Live Prototype">Live Prototype</option>
                </select>
            </Stack>
        </Box>
    )
}

export default CardTitle