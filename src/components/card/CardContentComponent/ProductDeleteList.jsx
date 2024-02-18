import { Box, Button, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Card, CardContent, CardHeader } from '@mui/material'
import React from 'react'
import CardTitle from '../cardTitlee/CardTitlee';
import { useSelector } from 'react-redux'

const TableHeaderRows = [
  { id: 1, title: 'Məzmun' },
  { id: 2, title: 'Əməliyyat tarixi' },
  { id: 3, title: 'Şirkət' },
  { id: 4, title: 'Filial' },
  { id: 5, title: 'Dəyiş' },
  { id: 6, title: 'Sil' },

]



const ProductDeleteList = () => {

  const product = useSelector((state) => state.products.products);
  const date = useSelector((state) => state.products.date);
  console.log('product', product)


  return (
    <Box sx={{ width: '85%', border: '3px solid #e4e4e4', margin: 'auto', marginY: '2rem', borderRadius: '10px', padding: '1rem', display: 'flex', flexDirection: "column", }}  >
      <Card>
        <CardTitle />
        <CardHeader title=""
          subheader=""
          avatar={null}
          action={null}>
        </CardHeader>

        <CardContent sx={{ backgroundColor: '#f1f1f1' }}>
          <Paper sx={{ margin: '.6rem', padding: '1.4rem' }}>

            <Button variant='contained' sx={{ width: '15rem', backgroundColor: '#007bff' }}>Əlavə et</Button>
            <Box>

              <Typography sx={{ fontWeight: '600', marginTop: '1.7rem', marginBottom: '.4rem' }}>Siyahı</Typography>
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
                      {product}
                      </TableCell>

                      <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                        {/* {date} */}
                        12.12.2021
                      </TableCell>

                      <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                        Tac MMC
                      </TableCell>


                      <TableCell align="center" sx={{ border: '1px solid #ccc' }}>
                        Binəqədi Filialı
                      </TableCell>



                      <TableCell align="center" sx={{ border: '1px solid #ccc', backgroundColor: '#007bff' }}>
                        <Button variant='contained'>Dəyiş</Button>
                      </TableCell>

                      <TableCell align="center" sx={{ border: '1px solid #ccc', backgroundColor: '#007bff' }}>
                        <Button variant='contained'>Sil</Button>

                      </TableCell>

                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ProductDeleteList