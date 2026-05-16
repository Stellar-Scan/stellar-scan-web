'use client';
import { NETWORKS } from '@/lib/constants';
export function NetworkSwitcher() {
  return <select className="rounded bg-slate-800 px-2 py-1 text-sm">{NETWORKS.map((n) => <option key={n}>{n}</option>)}</select>;
}
