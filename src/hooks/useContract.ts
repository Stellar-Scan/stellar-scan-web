'use client';
import useSWR from 'swr';
import { api } from '@/lib/api';

export function useContract(id: string) {
  return useSWR(id ? ['contract', id] : null, () => api.contract(id));
}
