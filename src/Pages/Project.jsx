import {Alert, Button, Card, CardActions, CardContent, Chip, Grid, Skeleton, Stack, Typography} from '@mui/material';
import PageLayout from '../Componen/PageLayout';
import useGitHubRepos from '../hooks/useGitHubRepos';

const USERNAME = 'ibrahimzahiddm';
const LIMIT = 12;

export default function Project() {
  const {repos, loading, error} = useGitHubRepos(USERNAME, LIMIT);

  return (
    <PageLayout>
      <Stack spacing={4}>
        <Stack spacing={2}>
          <Typography variant="h4" component="h1" sx={{fontWeight: 'bold'}}>
            Repository GitHub Saya
          </Typography>
          <Typography variant="body1" component="p" sx={{color: 'text.secondary'}}>
            Berikut beberapa hasil latihan dan projek saya yang saya buat di GitHub:
          </Typography>
        </Stack>

        {loading && (
          <Grid container spacing={2.5}>
            {Array.from({length: 6}).map((_, index) => (
              <Grid key={index} size={{xs: 12, sm: 6, lg: 4}}>
                <Skeleton variant="rounded" height={168} sx={{borderRadius: 3}} />
              </Grid>
            ))}
          </Grid>
        )}

        {/* memberitahu ke user ketika halaman ini error */}
        {!loading && error && (
          <Alert severity="error">
            {error}. Coba muat ulang halaman ini beberapa saat lagi.
          </Alert>
        )}

        {/* memberitahu kepada user ketika repository tidak ada */}
        {!loading && !error && repos.length === 0 && (
          <Alert severity="info">Belum ada repository publik yang bisa ditampilkan.</Alert>
        )}

        {!loading && !error && repos.length > 0 && (
          <Grid container spacing={2.5}>
            {repos.map((repo) => (

              // membuat repo menjadi berbentuk grid atau kolom
              <Grid key={repo.id} size={{xs: 12, sm: 6, lg: 4}}>
                <Card variant="outlined" sx={{height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, transition: 'box-shadow 0.2s', '&:hover': {boxShadow: 4}}}>
                  <CardContent sx={{flexGrow: 1}}>
                    <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent: 'space-between', mb: 1}}>
                      <Typography variant="subtitle1" component="h2" sx={{fontWeight: 'bold', wordBreak: 'break-word'}}>
                        {repo.name}
                      </Typography>
                      <Chip label={repo.language || 'Umum'} size="small" variant="outlined" />
                    </Stack>

                    <Typography variant="body2" component="p" sx={{color: 'text.secondary'}}>
                      {repo.description || 'Tidak ada deskripsi'}
                    </Typography>
                  </CardContent>

                  {/* tombol pada yang mengarah pada repository yang ada di github */}
                  <CardActions sx={{px: 2, pb: 2, pt: 0, flexWrap: 'wrap', gap: 1}}>
                    <Button size="small" variant="outlined" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      Lihat Proyek
                    </Button>
                    {repo.homepage && (
                      <Button size="small" variant="outlined" color="secondary" href={repo.homepage} target="_blank" rel="noopener noreferrer">
                        Lihat Demo
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Stack>
    </PageLayout>
  );
}
