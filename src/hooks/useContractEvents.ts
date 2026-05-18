'use client';
import useSWR from 'swr';
import { API_URL } from '@/lib/constants';

export function useContractEvents(id: string) {
  return useSWR(id ? ['events', id] : null, () =>
    fetch(`${API_URL}/contracts/${id}/events`).then((r) => r.json()),
  { refreshInterval: 15000 });
}
