import {Button, Card, CardActions, CardContent, Grid, Stack, Typography, Box} from '@mui/material';
import PageLayout from '../Componen/PageLayout';

// membuat isi variabel dari kontak
const contacts = [
  {
    label: 'Email',
    value: 'ibrahimzahid291@gmail.com',
    action: 'Kirim email',
    href: 'mailto:ibrahimzahid291@gmail.com?subject=Halo%20Zahid',
  },
  {
    label: 'Instagram',
    value: '@santri0.0',
    action: 'Buka Instagram',
    href: 'https://instagram.com/santri0.0',
  },
  {
    label: 'GitHub',
    value: 'ibrahimzahiddm',
    action: 'Buka GitHub',
    href: 'https://github.com/ibrahimzahiddm',
  },
  {
    label: 'WhatsApp',
    value: '+62 895-8069-51122',
    action: 'Chat WhatsApp',
    href: 'https://wa.me/62895806951122?text=halo%20bang',
  },
];

export default function Contact() {
  return (
    <PageLayout>
      <Stack spacing={4}>
        <Stack spacing={2}>
          <Typography variant="h4" component="h1" sx={{fontWeight: 'bold'}}>
            Hubungi Saya
          </Typography>
          <Typography variant="body1" component="p" sx={{color: 'text.secondary'}}>
            Silakan hubungi saya melalui email atau media sosial di bawah ini.
          </Typography>
        </Stack>

        {/* menampilkan kontak menjadi grid atau kolom */}
        <Grid container spacing={2.5}>
          {contacts.map((contact) => (
            <Grid key={contact.label} size={{xs: 12, sm: 6, lg: 3}}>
              <Card variant="outlined" sx={{height: '100%', borderRadius: 3, display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s', '&:hover': {boxShadow: 4}}}>
                <CardContent sx={{flexGrow: 1}}>
                  <Typography variant="subtitle1" component="h2" sx={{fontWeight: 'bold'}}>
                    {contact.label}
                  </Typography>
                  <Typography variant="body2" sx={{color: 'text.secondary', mb: 2}}>
                    {contact.value}
                  </Typography>
                </CardContent>

                {/* tombol contact */}
                <CardActions sx={{px: 2, pb: 2, pt: 0}}>
                  <Button size="small" variant="contained" href={contact.href} target={contact.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">
                    {contact.action}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* video demo penjelasan */}
          <Stack spacing={2}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
            Video penjelasan
          </Typography>

          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: 720,
              aspectRatio: '16 / 9',
            }}
          >
            <iframe
              src= "https://youtube.com/embed/u2WSiu5Ohcw?"
              title="Video Penjelasan Tugas"
              style={{ width: '100%', height: '100%', border: 0, borderRadius: 12 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Stack>
      </Stack>
    </PageLayout>
  );
}
