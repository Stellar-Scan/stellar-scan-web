import { SearchBar } from '@/components/explorer/SearchBar';
import { NetworkSwitcher } from '@/components/explorer/NetworkSwitcher';
import { TagFilter } from '@/components/explorer/TagFilter';

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Stellar Scan</h1>
        <NetworkSwitcher />
      </div>
      <p className="text-slate-300">Community Soroban contract registry and verified source explorer.</p>
      <SearchBar />
      <TagFilter />
    </section>
  );
}
