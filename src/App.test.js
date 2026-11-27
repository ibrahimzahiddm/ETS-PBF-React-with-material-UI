import {render, screen} from '@testing-library/react';
import App from './App';

test('menampilkan judul utama di halaman home', () => {
  render(<App />);
  expect(screen.getByRole('heading', {level: 1, name: /halo, saya ibrahim zahid daeng maro/i})).toBeInTheDocument();
});
