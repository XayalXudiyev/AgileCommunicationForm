import { Box, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const CardContentComponent = () => {
    return (

        <Paper sx={{ height: 'calc(100% - 4rem)', padding: '2rem' }}>
            <Box sx={{ bgcolor: '#f1f1f1', padding: '10px', borderRadius: '10px', paddingX: '20px' }}>

                <Box>
                    <Typography sx={{ fontWeight: '600', marginBottom: '3px' }}>Məzmun</Typography>
                    <TextField
                        sx={{ width: '100%', marginBottom: '1rem', backgroundColor: 'white' }}
                    />
                </Box>

                <Box sx={{ display: 'flex', width: '100% ', gap: '20px', }}>

                    <Box sx={{ width: '100%', }}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '3px' }}>Şirkət</Typography>
                        <Select
                            sx={{ width: '100%', backgroundColor: 'white' }}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            defaultValue={'TAC'}
                        >
                            <MenuItem value='TAC'>Tac MMC   </MenuItem>
                            <MenuItem value="">Mugam MMC</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ width: '100%', }}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '3px' }}>Filial</Typography>
                        <Select
                            sx={{ width: '100%', backgroundColor: 'white' }}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            defaultValue={'Binəqədi'}
                        >
                            <MenuItem value="Binəqədi">Binəqədi Filial</MenuItem>
                            <MenuItem value=''>Baş ofis</MenuItem>
                        </Select>
                    </Box>
                    <Box sx={{ width: '100%', marginBottom: '20px' }}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '3px' }}>Əməliyyat Tarixi</Typography>

                        <DatePicker sx={{ width: '100%', backgroundColor: 'white' }} />
                    </Box>
                </Box>
            </Box>
        </Paper>

    )
}

export default CardContentComponent