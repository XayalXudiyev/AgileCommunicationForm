import { Box, Button, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Card, CardContent } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useState } from 'react';
import CardTitle from '../cardTitlee/CardTitlee';
import { useDispatch, useSelector } from 'react-redux';
import { setContent, setCompany, setBranch, setDate, addContent } from '../../../store/contentSlice';
import ProductListTable from '../../table/ProductListTable/ProductListTable';

const ProductList = () => {
    const dispatch = useDispatch();
    const content = useSelector((state) => state.content.content);
    const selectedCompanyOption = useSelector((state) => state.content.company);
    const selectedBranchOption = useSelector((state) => state.content.branch);
    const selectedDate = useSelector((state) => state.content.date);

    const handleContentChange = (e) => {
        dispatch(setContent(e.target.value));
    };

    const handleCompanyChange = (e) => {
        dispatch(setCompany(e.target.value));
    };

    const handleBranchChange = (e) => {
        dispatch(setBranch(e.target.value));
    };

    const handleDateChange = (date) => {
        dispatch(setDate(date));
    };

    const handleSave = () => {
        dispatch(addContent());
    };

    return (
        <Box sx={{ width: '85%', border: '3px solid #e4e4e4', margin: 'auto', marginY: '2rem', borderRadius: '10px', padding: '1rem', display: 'flex', flexDirection: "column" }}>
            <CardTitle />
            <Card>
                <CardContent sx={{ backgroundColor: '#f1f1f1' }}>
                    <Paper sx={{ margin: '.6rem', padding: '2rem' }}>
                        <TextField sx={{ width: '100%', marginBottom: '1rem', backgroundColor: 'white' }} value={content} onChange={handleContentChange} />
                        <Box sx={{ display: 'flex', width: '100%', gap: '20px' }}>
                            <Select value={selectedCompanyOption} onChange={handleCompanyChange} sx={{ width: '100%', backgroundColor: 'white' }} displayEmpty inputProps={{ 'aria-label': 'Without label' }} defaultValue={'Tac'}>
                                <MenuItem value='Tac MMC'>Tac MMC</MenuItem>
                                <MenuItem value="Mugam MMC">Mugam MMC</MenuItem>
                            </Select>
                            <Select value={selectedBranchOption} onChange={handleBranchChange} sx={{ width: '100%', backgroundColor: 'white' }} displayEmpty inputProps={{ 'aria-label': 'Without label' }} defaultValue={'Binəqədi filialı'}>
                                <MenuItem value="Binəqədi filialı">Binəqədi Filial</MenuItem>
                                <MenuItem value='Baş ofis'>Baş ofis</MenuItem>
                            </Select>
                            <DatePicker
                                value={selectedDate}
                                onChange={handleDateChange}
                                renderInput={(params) => <TextField {...params} sx={{ width: '100%', backgroundColor: 'white' }} />}
                            />
                        </Box>

                            <ProductListTable  />

                        <Typography sx={{ fontWeight: '600', marginTop: '1.7rem' }}>Əməliyyat</Typography>
                        <Box sx={{ display: 'flex', gap: '1rem', backgroundColor: '#f1f1f1', padding: '.7rem', borderRadius: '10px', border: '1px solid #d6d6d6' }}>
                            <Button onClick={handleSave} variant="contained" sx={{ backgroundColor: '#007bff', width: '10rem' }}>Yadda saxla</Button>
                            <Button
                            onClick={() => window.location.reload()}
                            variant="contained" sx={{ backgroundColor: '#007bff', width: '10rem' }}>Ləğv et</Button>
                        </Box>
                    </Paper>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ProductList;
