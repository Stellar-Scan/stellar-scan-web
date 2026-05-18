'use client';
import useSWR from 'swr';
import { api } from '@/lib/api';

export function useContractList(query = '') {
  return useSWR(['contracts', query], () => api.contracts(query));
}
