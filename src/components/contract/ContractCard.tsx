import type { Contract } from '@/types/contract';
import Link from 'next/link';
export function ContractCard({ c }: { c: Contract }) {
  return <Link href={`/contracts/${c.contract_id}`} className="block rounded border border-slate-800 p-4">{c.contract_id}</Link>;
}
