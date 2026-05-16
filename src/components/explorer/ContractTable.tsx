import type { Contract } from '@/types/contract';
export function ContractTable({ items }: { items: Contract[] }) {
  return (
    <table className="w-full text-sm"><tbody>{items.map((c) => <tr key={c.contract_id}><td>{c.contract_id}</td></tr>)}</tbody></table>
  );
}
