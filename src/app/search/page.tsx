'use client';
import { useSearch } from '@/hooks/useSearch';
export default function SearchPage() {
  const { data } = useSearch();
  return <pre className="text-xs">{JSON.stringify(data?.results ?? [], null, 2)}</pre>;
}
