import {Box, Container, Typography} from '@mui/material';

export default function FooterPage() {
  return (
    <Box component="footer" sx={{borderTop: 1, borderColor: 'divider', py: 3}}>
      <Container maxWidth="lg">
        <Typography variant="body2" component="p" sx={{color: 'text.secondary'}}>
          © {new Date().getFullYear()} Ibrahim Zahid Daeng Maro. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
