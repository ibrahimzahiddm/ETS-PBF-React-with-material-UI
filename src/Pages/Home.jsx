import {Box, Button, Stack, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import PageLayout from '../Componen/PageLayout';
import Profile from '../Gambar/Profile.jpeg';

export default function Home() {
  return (
    <PageLayout>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {xs: '1fr', md: 'minmax(0, 1.3fr) minmax(0, 1fr)'},
          gap: {xs: 4, md: 6},
          alignItems: 'center',
          minHeight: {md: '70vh'},
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h2" component="h1" sx={{fontSize: {xs: '2.25rem', sm: '3rem', md: '3.75rem'}, fontWeight: 'bold', lineHeight: 1.15}}>
            Halo, Saya Ibrahim Zahid Daeng Maro
          </Typography>
          <Typography variant="h6" component="p" sx={{color: 'text.secondary', fontWeight: 400}}>
            Ini adalah portofolio sederhana saya.
          </Typography>
          <Typography variant="body1" component="p" sx={{color: 'text.secondary'}}>
            Saya adalah seorang mahasiswa yang sedang belajar pemrograman web. Saya memiliki minat dalam pengembangan aplikasi web dan ingin terus mengembangkan
            keterampilan saya di bidang ini.
          </Typography>

          {/* button */}
          <Box sx={{display: 'flex', gap: 2, flexWrap: 'wrap', pt: 1}}>
            <Button component={RouterLink} to="/project" variant="contained" size="large">
              Lihat proyek
            </Button>
            <Button component={RouterLink} to="/contact" variant="outlined" size="large">
              Hubungi saya
            </Button>
          </Box>
        </Stack>

        {/* Foto yang ada di home */}
        <Box
          component="img"
          src={Profile}
          alt="Foto Ibrahim Zahid Daeng Maro"
          loading="eager"
          sx={{
            width: '100%',
            maxWidth: {xs: 280, sm: 360, md: 400},
            height: 'auto',
            justifySelf: {xs: 'center', md: 'end'},
            borderRadius: 4,
            boxShadow: 3,
          }}
        />
      </Box>
    </PageLayout>
  );
}
