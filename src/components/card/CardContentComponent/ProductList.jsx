import { Box, Button, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Card, CardContent, CardHeader } from '@mui/material'
import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const TableHeaderRows = [
    { id: 1, title: 'Məhsul' },
    { id: 2, title: 'Məhsul növü' },
    { id: 3, title: 'Vahid' },
    { id: 4, title: 'Miqdar' },
    { id: 5, title: 'Qeyd' },
    { id: 6, title: 'Əlavə et' },
    { id: 7, title: 'Dəyiş' },
    { id: 8, title: 'Sil' }
]

const TableRows = [
    { id: 1, title: 'Çay dəsti' },
    { id: 2, title: 'Stəkan dəsti' },
    { id: 3, title: 'Stəkan altlıq' }
]
const productData = [
    { id: 1, name: 'Çay dəsti' },
    { id: 2, name: 'Stəkan dəsti' },
    { id: 3, name: 'Stəkan altlıq' },
];

const productTypeData = [
    { id: 1, name: 'Hazır məhsul' },
    { id: 2, name: 'Xammal' },
    { id: 3, name: 'Mal' },
];

const unitData = [
    { id: 1, name: 'kq' },
    { id: 2, name: 'qram' },
    { id: 3, name: 'litr' },
    { id: 4, name: 'sm' },
    { id: 5, name: 'km' },
];

const ProductList = () => {
    return (
        <Box sx={{ width: '85%', border: '3px solid #e4e4e4', margin: 'auto', marginY: '2rem', borderRadius: '10px', padding: '1rem', display: 'flex', flexDirection: "column", }}  >
            <Card>

                <CardHeader title=""
                    subheader=""
                    avatar={null}
                    action={null}>
                </CardHeader>

                <CardContent sx={{ backgroundColor: '#f1f1f1' }}>
                    <Paper sx={{ margin: '.6rem', padding: '2rem' }}>
                        <Box sx={{ bgcolor: '#f1f1f1', padding: '10px', borderRadius: '10px', paddingX: '20px' }}>

                            <Box>
                                <Typography sx={{ fontWeight: '600', marginBottom: '3px' }}>Məzmun</Typography>
                                <TextField sx={{ width: '100%', marginBottom: '1rem', backgroundColor: 'white' }} />
                            </Box>

                            <Box sx={{ display: 'flex', width: '100% ', gap: '20px', }}>

                                <Box sx={{ width: '100%', }}>
                                    <Typography sx={{ fontWeight: '600', marginBottom: '3px' }}>Şirkət</Typography>
                                    <Select sx={{ width: '100%', backgroundColor: 'white' }} displayEmpty inputProps={{ 'aria-label': 'Without label' }} defaultValue={'TAC'} >
                                        <MenuItem value='TAC'>Tac MMC   </MenuItem>
                                        <MenuItem value="">Mugam MMC</MenuItem>
                                    </Select>
                                </Box>

                                <Box sx={{ width: '100%', }}>
                                    <Typography sx={{ fontWeight: '600', marginBottom: '3px' }}>Filial</Typography>
                                    <Select sx={{ width: '100%', backgroundColor: 'white' }} displayEmpty inputProps={{ 'aria-label': 'Without label' }} defaultValue={'Binəqədi'}    >
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

                        <Box>
                            <Typography sx={{ fontWeight: '600', marginTop: '1.7rem', marginBottom: '.4rem' }}>Məhsul Siyahısı</Typography>
                            <TableContainer >
                                <Table sx={{ border: '1px solid #ccc', }}>

                                    <TableHead>
                                        <TableRow>
                                            {
                                                TableHeaderRows.map((item, index) => {
                                                    return (
                                                        <TableCell key={index} align="center" sx={{ border: '1px solid #ccc' }}>
                                                            {item.title}
                                                        </TableCell>
                                                    )
                                                })}
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                                <Select sx={{ width: '6rem', backgroundColor: 'white' }}>
                                                    {productData.map((item, index) => (
                                                        <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                                                    ))}
                                                </Select>
                                            </TableCell>

                                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                                <Select sx={{ width: '6rem', backgroundColor: 'white' }}>
                                                    {productTypeData.map((item, index) => (
                                                        <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                                                    ))}
                                                </Select>
                                            </TableCell>

                                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                                <Select sx={{ width: '6rem', backgroundColor: 'white' }}>
                                                    {unitData.map((item, index) => (
                                                        <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                                                    ))}
                                                </Select>
                                            </TableCell>

                                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                                <TextField type="number" />
                                            </TableCell>

                                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                                <TextField />
                                            </TableCell>

                                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                                <Button variant="contained" color="primary" sx={{ width: '7rem' }}>Əlavə et</Button>
                                            </TableCell>

                                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                                <Button variant="contained" color="primary" sx={{ width: '7rem' }}>Dəyiş</Button>
                                            </TableCell>

                                            <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                                                <Button variant="contained" color="primary" sx={{ width: '7rem' }}>Sil</Button>
                                            </TableCell>

                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>

                        <Typography sx={{ fontWeight: '600', marginTop: '1.7rem', }}>Əməliyyat</Typography>
                        <Box sx={{ display: 'flex', gap: '1rem', backgroundColor: '#f1f1f1', padding: '.7rem', borderRadius: '10px', border: '1px solid #d6d6d6' }}>
                            <Button variant="contained" color="primary" sx={{ width: '10rem' }}>Yadda saxla</Button>
                            <Button variant="contained" color="primary" sx={{ width: '10rem' }}>Ləğv et</Button>
                        </Box>


                    </Paper>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ProductList