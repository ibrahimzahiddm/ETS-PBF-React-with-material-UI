import {Box, Stack, Typography} from '@mui/material';
import PageLayout from '../Componen/PageLayout';
import Photo from '../Gambar/Photo.jpeg';

export default function About() {
  return (
    <PageLayout>
      <Stack
        direction={{xs: 'column', md: 'row'}}
        spacing={{xs: 4, md: 6}}
        sx={{alignItems: {xs: 'flex-start', md: 'center'}, justifyContent: 'space-between', py: {md: 2}}}
      >
        <Stack spacing={2} sx={{maxWidth: {md: 640}}}>

            {/* Tentang saya */}
          <Typography variant="h4" component="h1" sx={{fontWeight: 'bold'}}>
            Tentang Saya
          </Typography>
          <Typography variant="body1" component="p" sx={{color: 'text.secondary'}}>
            Saya adalah seorang pelajar yang memiliki ketertarikan pada dunia teknologi, khususnya dalam bidang pengembangan web, pemrograman, dan desain grafis. Saya
            senang mengeksplorasi hal-hal baru, mempelajari teknologi, serta mengembangkan ide menjadi sesuatu yang nyata dan bermanfaat. Dalam proses belajar, saya
            selalu berusaha memahami sesuatu secara mendalam, berpikir kritis, dan terus meningkatkan kemampuan diri. Bagi saya, setiap hal baru adalah kesempatan
            untuk berkembang, menambah pengalaman, dan menemukan potensi diri. Melalui perjalanan ini, saya ingin terus belajar, berkarya, dan menciptakan sesuatu
            yang memiliki nilai serta manfaat bagi orang lain.
          </Typography>

          {/* profil */}
          <Typography variant="h4" component="h2" sx={{fontWeight: 'bold', pt: 2}}>
            Profil
          </Typography>
          <Typography variant="body1" component="p" sx={{color: 'text.secondary'}}>
            Saya adalah seorang pelajar yang saat ini sedang menempuh pendidikan di Universitas Muhammadiyah Makassar dan di Universitas Insan Cita Indonesia. Saya
            memiliki latar belakang pendidikan di bidang Bahasa arab dan terus berusaha mengembangkan pengetahuan serta keterampilan melalui proses pembelajaran,
            baik di lingkungan pendidikan maupun di luar kegiatan akademik.
          </Typography>
        </Stack>

        {/* menampilkan foto  */}
        <Box
          component="img"
          src={Photo}
          alt="Foto Ibrahim Zahid Daeng Maro sedang membaca di toko buku"
          loading="lazy"
          sx={{
            width: {xs: '100%', sm: 240, md: 280},
            maxWidth: 320,
            height: 'auto',
            borderRadius: 4,
            boxShadow: 3,
            mx: {xs: 'auto', md: 0},
            flexShrink: 0,
          }}
        />
      </Stack>
    </PageLayout>
  );
}
