import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { githubUser } from '../data/profile.js';

export function useGitHub() {
  const [state, setState] = useState({
    loading: true,
    profile: null,
    repos: [],
    error: null,
  });

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const [{ data: profile }, { data: repos }] = await Promise.all([
          axios.get(`https://api.github.com/users/${githubUser}`),
          axios.get(`https://api.github.com/users/${githubUser}/repos`, {
            params: { sort: 'updated', per_page: 12 },
          }),
        ]);
        if (alive) setState({ loading: false, profile, repos, error: null });
      } catch (error) {
        if (alive) setState({ loading: false, profile: null, repos: [], error });
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, []);

  return useMemo(() => {
    const languages = state.repos.reduce((acc, repo) => {
      const key = repo.language || 'Systems';
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    return {
      ...state,
      languages: Object.entries(languages)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 6),
    };
  }, [state]);
}
