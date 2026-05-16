'use client';
import { useSearch } from '@/hooks/useSearch';
export function SearchBar() {
  const { q, setQ } = useSearch();
  return <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search contracts" className="w-full rounded border border-slate-700 bg-slate-900 px-3 py-2" />;
}
