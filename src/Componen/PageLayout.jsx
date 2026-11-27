import {Box, Container} from '@mui/material';
import PageHeader from './PageHeader';
import FooterPage from './FooterPage';

/**
 * Kerangka halaman: header, isi, footer.
 * minHeight dipakai supaya footer tidak naik di halaman yang isinya pendek.
 */
export default function PageLayout({children, minHeight = 'calc(100vh - 160px)', maxWidth = 'lg'}) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <PageHeader />
      <Container maxWidth={maxWidth} sx={{flexGrow: 1, py: {xs: 4, sm: 6}}}>
        <Box sx={{minHeight}}>{children}</Box>
      </Container>
      <FooterPage />
    </Box>
  );
}
