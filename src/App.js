import {HashRouter, Route, Routes} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import theme from './theme';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import NotFound from './Pages/NotFound';

/*
 * HashRouter dipakai agar routing tetap bekerja di hosting statis (GitHub Pages).
 * URL menjadi: /#/about, /#/project, dan seterusnya. Ganti ke BrowserRouter
 * kalau nanti di-host di server yang bisa rewrite semua path ke index.html.
 */
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}
