import { motion } from 'framer-motion';
import { FaCodeBranch, FaGithub, FaStar } from 'react-icons/fa';
import GlassPanel from '../components/GlassPanel.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { useGitHub } from '../hooks/useGitHub.js';
import { fadeUp } from '../utils/motion.js';

export default function GitHubDashboard() {
  const { loading, profile, repos, languages, error } = useGitHub();
  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const forks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

  return (
    <section id="github" className="section-shell">
      <SectionHeader eyebrow="GitHub Intelligence" title="Live Developer Analytics">
        Connected to the GitHub API for repository, language, and activity signals.
      </SectionHeader>
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
        <GlassPanel className="p-6">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-full border border-cyan-neon/30 bg-cyan-neon/10 text-3xl text-cyan-neon">
              <FaGithub />
            </div>
            <div>
              <p className="font-display text-xs uppercase tracking-[0.25em] text-cyan-neon">github.com/Posa5A6</p>
              <h3 className="text-3xl font-black text-white">{profile?.name || 'Posa5A6'}</h3>
            </div>
          </div>
          <div className="mt-7 grid grid-cols-3 gap-3">
            {[
              ['Repos', profile?.public_repos ?? repos.length],
              ['Stars', totalStars],
              ['Forks', forks],
            ].map(([label, value]) => (
              <div key={label} className="border border-cyan-neon/15 bg-black/25 p-4 text-center">
                <p className="text-3xl font-black text-white">{loading ? '--' : value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p className="mb-3 font-display text-xs uppercase tracking-[0.25em] text-slate-400">Contribution Pulse</p>
            <div className="grid grid-cols-14 gap-1">
              {Array.from({ length: 84 }).map((_, index) => (
                <motion.span
                  key={index}
                  className="h-3 bg-cyan-neon/10"
                  animate={{ opacity: [0.25, 0.9, 0.35] }}
                  transition={{ duration: 1.4 + (index % 7) * 0.12, repeat: Infinity, delay: index * 0.01 }}
                  style={{ backgroundColor: index % 5 === 0 ? 'rgba(255,46,247,.42)' : index % 3 === 0 ? 'rgba(0,245,255,.5)' : 'rgba(24,119,255,.22)' }}
                />
              ))}
            </div>
          </div>
          {error && <p className="mt-5 text-sm text-amber-200">GitHub live data is temporarily unavailable; fallback command center visuals are active.</p>}
        </GlassPanel>
        <div className="grid gap-5">
          <GlassPanel className="p-6">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-cyan-neon">Language Usage</p>
            <div className="mt-5 space-y-4">
              {(languages.length ? languages : [{ name: 'JavaScript', value: 5 }, { name: 'Java', value: 3 }, { name: 'Python', value: 2 }]).map((language) => (
                <div key={language.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{language.name}</span>
                    <span className="text-cyan-neon">{language.value} repos</span>
                  </div>
                  <div className="h-2 bg-white/10">
                    <motion.div className="h-full bg-gradient-to-r from-blue-electric via-cyan-neon to-magenta-hot" initial={{ width: 0 }} whileInView={{ width: `${Math.min(100, language.value * 18)}%` }} viewport={{ once: true }} />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
          <GlassPanel className="p-6">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-cyan-neon">Recent Repositories</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {(repos.length ? repos.slice(0, 4) : []).map((repo) => (
                <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="border border-cyan-neon/15 bg-black/25 p-4 transition hover:border-cyan-neon/50 hover:bg-cyan-neon/10">
                  <p className="font-bold text-white">{repo.name}</p>
                  <div className="mt-3 flex gap-4 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1"><FaStar /> {repo.stargazers_count}</span>
                    <span className="inline-flex items-center gap-1"><FaCodeBranch /> {repo.forks_count}</span>
                  </div>
                </a>
              ))}
              {!repos.length && <p className="text-slate-400">{loading ? 'Synchronizing repositories...' : 'Repository telemetry ready for GitHub API refresh.'}</p>}
            </div>
          </GlassPanel>
        </div>
      </motion.div>
    </section>
  );
}
