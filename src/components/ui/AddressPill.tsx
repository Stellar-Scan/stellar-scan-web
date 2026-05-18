'use client';
import { truncateAddress } from '@/lib/format';

export function AddressPill({ value }: { value: string }) {
  return (
    <button type="button" className="rounded bg-slate-800 px-2 py-1 text-xs" onClick={() => navigator.clipboard.writeText(value)}>
      {truncateAddress(value)}
    </button>
  );
}
