
import { Stack } from '@mui/material';
import CardHeadingTitle from './components/ProjectTitle/ProjectTitle';
import Header from './components/header/Header'
import CardComponent from './components/card/Card';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack >
        <Header />
        <CardHeadingTitle />
        <CardComponent />
      </Stack>
    </LocalizationProvider>
  );
}

export default App