'use client';
import { useMemo, useState } from 'react';
import useSWR from 'swr';
import { api } from '@/lib/api';

export function useSearch() {
  const [q, setQ] = useState('');
  const debounced = useMemo(() => q, [q]);
  const { data, isLoading } = useSWR(debounced ? ['search', debounced] : null, () => api.search(debounced));
  return { q, setQ, data, isLoading };
}
