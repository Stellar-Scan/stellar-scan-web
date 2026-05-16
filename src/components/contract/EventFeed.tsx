'use client';
import { useContractEvents } from '@/hooks/useContractEvents';
export function EventFeed({ id }: { id: string }) {
  const { data } = useContractEvents(id);
  return <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>;
}
