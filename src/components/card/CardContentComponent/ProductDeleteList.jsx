import React, { useState } from 'react';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Card, CardContent, Modal, Chip } from '@mui/material';
import CardTitle from '../cardTitlee/CardTitlee';
import ProductList from './ProductList';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
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
    const [openModal, setOpenModal] = useState(false);

    const handleAddClick = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Box sx={{ width: '85%', border: '3px solid #e4e4e4', margin: 'auto', marginY: '2rem', borderRadius: '10px', padding: '1rem', display: 'flex', flexDirection: "column" }}>
            <Typography sx={{ display: 'flex', alignItems: 'end', marginBottom:'.6rem' }} >

                <Chip label="1" sx={{ fontSize: '1.375rem', color: 'white', fontWeight: '600', backgroundColor: '#28a79e', borderRadius: '5px', }} />

                <Typography component='span' sx={{ fontWeight: '700', marginLeft: '5px', fontSize: '1.125rem' }}>
                    Məhsul Silinmə Siyahısı
                </Typography>
            </Typography>

            <CardTitle />
            <Card>
                <CardContent sx={{ backgroundColor: '#f1f1f1' }}>
                    <Paper sx={{ margin: '.6rem', padding: '1.4rem' }}>
                        <Button onClick={handleAddClick} variant='contained' sx={{ width: '15rem', backgroundColor: '#007bff' }}>Əlavə et</Button>
                        <Modal
                            open={openModal}
                            onClose={handleCloseModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{ maxHeight: '100%', overflow: 'scroll', paddingTop: '10rem', }}
                        >
                            <Box sx={{
                                position: 'absolute',
                                bottom: '-80%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: 24,


                            }}>
                                <ProductList />
                            </Box>
                        </Modal>
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
                                                    {item.date === 'Invalid Date' ? '' : item.date}
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
