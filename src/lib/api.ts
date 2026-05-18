import { API_URL } from './constants';
import type { Contract } from '@/types/contract';
import type { Paginated } from '@/types/api';

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, { next: { revalidate: 30 } });
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json() as Promise<T>;
}

export const api = {
  contract: (id: string) => get<Contract>(`/contracts/${id}`),
  contracts: (q = '') => get<Paginated<Contract>>(`/contracts${q}`),
  search: (q: string) => get<{ results: Contract[] }>(`/search?q=${encodeURIComponent(q)}`),
};
