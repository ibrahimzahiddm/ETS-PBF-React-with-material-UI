import {Button, Stack, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import PageLayout from '../Componen/PageLayout';

// muncul ketika halaman tidak ditemukan
export default function NotFound() {
  return (
    <PageLayout>
      <Stack spacing={3} sx={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: {xs: '60vh', md: '65vh'}}}>
        <Typography variant="h1" component="p" sx={{fontWeight: 'bold', color: 'primary.main'}}>
          404
        </Typography>
        <Typography variant="h5" component="h1">
          Halaman tidak ditemukan
        </Typography>
        <Typography variant="body1" sx={{color: 'text.secondary', maxWidth: 440}}>
          Alamat yang Anda buka tidak tersedia. Silakan kembali ke halaman utama.
        </Typography>
        <Button component={RouterLink} to="/" variant="contained" size="large">
          Kembali ke Home
        </Button>
      </Stack>
    </PageLayout>
  );
}
