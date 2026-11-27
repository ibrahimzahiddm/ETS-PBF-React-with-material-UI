import {useEffect, useState} from 'react';

/**
 * Mengambil daftar repository publik milik `username` dari GitHub API.
 * Request dibatalkan saat komponen dilepas atau parameter berubah.
 */
export default function useGitHubRepos(username, limit = 12) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // mengambil data dari repository dan membersihkan request yang berjalan
  useEffect(() => {
    if (!username) {
      setRepos([]);
      setError(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function fetchRepos() {
      setLoading(true);
      setError(null);

      // // request data repository ke Github API dan tangani gagal
      try {
        const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=${limit}`;
        const response = await fetch(url, {signal: controller.signal});

        if (!response.ok) {
          throw new Error(`tidak bisa mengambil data dari GitHub (HTTP ${response.status})`);
        }

        const data = await response.json();
        setRepos(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {

        // abaikan error jika request dibatalkan oleh cleanup / StrictMode
        if (err.name === 'AbortError') return;
        setError(err.message || 'gagal mengambil data dari GitHub');
        setLoading(false);
      }
    }

    fetchRepos();

    // batalkan fetch yang masih berjalan jika komponen dilepas atau parameter berubah
    return () => {
      controller.abort();
    };
  }, [username, limit]);

  return {repos, loading, error};
}
