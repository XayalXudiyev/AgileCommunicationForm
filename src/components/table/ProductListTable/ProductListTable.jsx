import React, { useState } from 'react';
import { Box, Button, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct, deleteProduct } from '../../../store/productSlice'; 

const ProductListTable = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);

    const [newProductData, setNewProductData] = useState({
        name: '',
        type: '',
        unit: '',
        quantity: '',
        note: '' 
    });

    const handleAddProduct = () => {
        if (Object.values(newProductData).slice(0, -1).some(value => value === '')) {
            return alert('Bütün xanaları doldurun! (Qeyd xanası istəyə bağlıdır!!!)');
        }

        dispatch(addProduct(newProductData));
        setNewProductData({
            name: '',
            type: '',
            unit: '',
            quantity: '',
            note: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProductData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <Box>
            <Typography sx={{ fontWeight: '600', marginTop: '1.7rem', marginBottom: '.4rem' }}>Məhsul Siyahısı</Typography>
            <TableContainer>
                <Table sx={{ border: '1px solid #ccc' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>Məhsul</TableCell>
                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>Məhsul növü</TableCell>
                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>Vahid</TableCell>
                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>Miqdar</TableCell>
                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>Qeyd</TableCell>
                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>Əlavə et</TableCell>
                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>Dəyiş</TableCell>
                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>Sil</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{product.name}</TableCell>
                                <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{product.type}</TableCell>
                                <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{product.unit}</TableCell>
                                <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{product.quantity}</TableCell>
                                <TableCell align="center" sx={{ border: '1px solid #ccc' }}>{product.note}</TableCell>
                                <TableCell align="center" sx={{ border: '1px solid #ccc' }}></TableCell>
                                <TableCell align="center" sx={{ border: '1px solid #ccc' }}></TableCell>
                                <TableCell align="center" sx={{ border: '1px solid #ccc' }}></TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                <Select sx={{ width: '5rem', backgroundColor: 'white' }} name="name" value={newProductData.name} onChange={handleChange}>
                                    <MenuItem value="Çay dəsti">Çay dəsti</MenuItem>
                                    <MenuItem value="Stəkan dəsti">Stəkan dəsti</MenuItem>
                                    <MenuItem value="Stəkan altlıq">Stəkan altlıq</MenuItem>
                                </Select>
                            </TableCell>

                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                <Select sx={{ width: '5rem', backgroundColor: 'white' }} name="type" value={newProductData.type} onChange={handleChange}>
                                    <MenuItem value="Hazır məhsul">Hazır məhsul</MenuItem>
                                    <MenuItem value="Xammal">Xammal</MenuItem>
                                    <MenuItem value="Mal">Mal</MenuItem>
                                </Select>
                            </TableCell>

                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                <Select sx={{ width: '5rem', backgroundColor: 'white' }} name="unit" value={newProductData.unit} onChange={handleChange}>
                                    <MenuItem value="kq">kq</MenuItem>
                                    <MenuItem value="qram">qram</MenuItem>
                                    <MenuItem value="litr">litr</MenuItem>
                                    <MenuItem value="sm">sm</MenuItem>
                                    <MenuItem value="km">km</MenuItem>
                                </Select>
                            </TableCell>

                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                <TextField sx={{width: '5rem'}} type="number" name="quantity" value={newProductData.quantity} onChange={handleChange} />
                            </TableCell>

                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                <TextField sx={{width: '5rem'}}  name="note" value={newProductData.note} onChange={handleChange} />
                            </TableCell>

                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                <Button variant="contained" sx={{ backgroundColor: '#007bff', width: '7rem' }} onClick={handleAddProduct}>ADD</Button>
                            </TableCell>

                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                <Button variant="contained" sx={{ backgroundColor: '#007bff', width: '7rem' }}  > UPDATE</Button>
                            </TableCell>

                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                <Button variant="contained" sx={{ backgroundColor: '#007bff', width: '7rem' }} >DELETE</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ProductListTable;
