
import { Stack } from '@mui/material';
import CardHeadingTitle from './components/ProjectTitle/ProjectTitle';
import Header from './components/header/Header'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProductDeleteList from './components/card/CardContentComponent/ProductDeleteList';
import ProductList from './components/card/CardContentComponent/ProductList';




const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <Stack >
        <Header />
        <CardHeadingTitle />
        <Routes>
          <Route path="/" element={<ProductList />} /> 
          <Route path="/productDeleteList" element={<ProductDeleteList />} />
        </Routes>
      </Stack>
    </LocalizationProvider>
  );
}

export default App