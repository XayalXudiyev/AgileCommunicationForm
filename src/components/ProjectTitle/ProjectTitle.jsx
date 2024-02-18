import { TextField, Typography, IconButton, Box, Stack, Chip, MenuItem, Select } from '@mui/material';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import { NavLink, useNavigate } from 'react-router-dom';
import ProductListComponent from '../card/CardContentComponent/ProductList';
import ProductDeleteListComponent from '../card/CardContentComponent/ProductDeleteList';

const ProjectTitle = () => {
  const navigate = useNavigate();

  const handleAddEditProductNavigation = () => {
    navigate('/');
  };

  const handleProductDeleteNavigation = () => {
    navigate('/productDeleteList');
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '94%', margin: 'auto', marginTop: '2rem' }}>
      <Stack direction="row" alignItems="center">
        <IconButton color="inherit">
          <DesktopWindowsOutlinedIcon sx={{ fontSize: '1.75rem', fontWeight: '100' }} />
        </IconButton>
        <Typography component="span">
          <Chip label="Agile Communication" sx={{ fontSize: '1.375rem', color: 'white', fontWeight: '600', backgroundColor: '#28a79e', borderRadius: '5px', height: '25px' }} />
        </Typography>
        <Typography variant="h6" sx={{ color: 'orangered', fontWeight: '700', marginLeft: '10px' }}>
          Form Card<sup>™</sup>
        </Typography>
      </Stack>

      <Select
        sx={{ width: '50%', bgcolor: '#f5f5f5' }}
        displayEmpty
        onChange={(event) => {
          const selectedValue = event.target.value;
          if (selectedValue === 'addEdit') {
            handleAddEditProductNavigation();
          } else if (selectedValue === 'deleteList') {
            handleProductDeleteNavigation();
          }
        }}
      >
        <MenuItem value="" disabled>
          Məhsul Silinmə (Əlavə et/ Dəyiş)
        </MenuItem>
        <MenuItem value="addEdit">Məhsul Silinmə (Əlavə et/ Dəyiş)</MenuItem>
        <MenuItem value="deleteList">Məhsul Silinmə Siyahısı</MenuItem>
      </Select>
    </Box>
  );
};

export default ProjectTitle;
