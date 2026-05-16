import { SearchBar } from '@/components/explorer/SearchBar';

export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">Stellar Scan</h1>
      <p className="text-slate-300">Community Soroban contract registry and verified source explorer.</p>
      <SearchBar />
    </section>
  );
}
