import {AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from '@mui/material';
import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  {label: 'Home', path: '/'},
  {label: 'About', path: '/about'},
  {label: 'Project', path: '/project'},
  {label: 'Contact', path: '/contact'},
];

export default function PageHeader() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  // memberi garis bawah pada menu sesuai halaman yang aktif
  const activeStyle = (path) => ({
    borderBottom: location.pathname === path ? '2px solid currentColor' : '2px solid transparent',
  });

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'inherit', fontWeight: 'bold', textDecoration: 'none' }}>
              IbrahimZahid
            </Typography>

            {/* menu pada desktop */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <Button key={item.path} color="inherit" component={Link} to={item.path} sx={activeStyle(item.path)}>
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* tombol hamburger pada mobile */}
            <IconButton color="inherit" edge="end" aria-label="buka menu navigasi" onClick={handleDrawerToggle} sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* drawer menu untuk mobile */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { width: 240 } }}>
        <List sx={{ pt: 2 }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem key={item.path} disablePadding>
                <ListItemButton component={Link} to={item.path} onClick={() => setMobileOpen(false)} selected={isActive}>
                  <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: isActive ? 'bold' : 'normal' }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}
