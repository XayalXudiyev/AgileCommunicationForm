import { Autocomplete, TextField, Typography, IconButton, Box, Stack, Chip } from '@mui/material';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';


const ProjectTitle = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '94% ', margin: 'auto', marginTop: '2rem' }}>
      <Stack direction="row" alignItems="center">
        <IconButton color="inherit" >
          <DesktopWindowsOutlinedIcon sx={{ fontSize: '1.75rem', fontWeight: '100' }} />
        </IconButton>
        <Typography component="span" >
          <Chip label="Agile Communication" sx={{ fontSize: '1.375rem', color: 'white', fontWeight: '600', backgroundColor: '#28a79e', borderRadius: '5px', height: '25px' }} />

        </Typography>
        <Typography variant='h6' sx={{ color: 'orangered', fontWeight: '700', marginLeft: '10px' }}>
          Form Card<sup>™</sup>
        </Typography>
      </Stack>
      <Autocomplete
      displayEmpty
        sx={{
          width: '50%',
          bgcolor: '#f5f5f5',

          "& .MuiOutlinedInput-notchedOutline": {
            border: "none"
          }
        }}
        options={["Məhsul Silinmə (Əlavə et/ Dəyiş)", "Məhsul Silinmə Siyahısı"]}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Məhsul Silinmə (Əlavə et/ Dəyiş)"
            sx={{
              border: 'none',
              outline: 'none',
            }}
          />
        )}
      />

    </Box>
  );
};

export default ProjectTitle;
