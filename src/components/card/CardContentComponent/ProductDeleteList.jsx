import React, { useState } from 'react';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Card, CardContent } from '@mui/material';
import CardTitle from '../cardTitlee/CardTitlee';
import { useSelector, useDispatch } from 'react-redux';
import { removeContent } from '../../../store/contentSlice'; // Eklenen import

const TableHeaderRows = [
    { id: 1, title: 'Məzmun' },
    { id: 2, title: 'Əməliyyat tarixi' },
    { id: 3, title: 'Şirkət' },
    { id: 4, title: 'Filial' },
    { id: 5, title: 'Dəyiş' },
    { id: 6, title: 'Sil' },
];

const ProductDeleteList = () => {
    const dataList = useSelector((state) => state.content.dataList);
    const dispatch = useDispatch();

    console.log(dataList, 'dataList');

    const handleRemove = (id) => {
        dispatch(removeContent(id));
    };

    return (
        <Box sx={{ width: '85%', border: '3px solid #e4e4e4', margin: 'auto', marginY: '2rem', borderRadius: '10px', padding: '1rem', display: 'flex', flexDirection: "column" }}>
            <CardTitle />
            <Card>
                <CardContent sx={{ backgroundColor: '#f1f1f1' }}>
                    <Paper sx={{ margin: '.6rem', padding: '1.4rem' }}>
                        <Button variant='contained' sx={{ width: '15rem', backgroundColor: '#007bff' }}>Əlavə et</Button>
                        <Box>
                            <Typography sx={{ fontWeight: '600', marginTop: '1.7rem', marginBottom: '.4rem' }}>Siyahı</Typography>
                            <TableContainer>
                                <Table sx={{ border: '1px solid #ccc' }}>
                                    <TableHead>
                                        <TableRow>
                                            {TableHeaderRows.map((item, index) => (
                                                <TableCell key={index} align="center" sx={{ border: '1px solid #ccc' }}>
                                                    {item.title}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {dataList.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell align="center" sx={{ border: '1px solid #ccc', fontWeight: '900' }}>
                                                    {item.content}
                                                </TableCell>
                                                <TableCell align="center" sx={{ border: '1px solid #ccc', fontWeight: '900' }}>
                                                    {item.date}
                                                </TableCell>
                                                <TableCell align="center" sx={{ border: '1px solid #ccc', fontWeight: '900' }}>
                                                    {item.company}
                                                </TableCell>
                                                <TableCell align="center" sx={{ border: '1px solid #ccc', fontWeight: '900' }}>
                                                    {item.branch}
                                                </TableCell>
                                                <TableCell align="center" sx={{ border: '1px solid #ccc', fontWeight: '900' }}>
                                                    <Button variant='contained'>Dəyiş</Button>
                                                </TableCell>
                                                <TableCell align="center" sx={{ border: '1px solid #ccc', fontWeight: '900' }}>
                                                    <Button variant='contained' onClick={() => handleRemove(index)}>Sil</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Paper>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ProductDeleteList;
