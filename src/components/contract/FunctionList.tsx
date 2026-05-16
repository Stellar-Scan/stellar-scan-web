import type { ContractFunction } from '@/types/contract';
export function FunctionList({ fns }: { fns: ContractFunction[] }) {
  return <ul>{fns.map((f) => <li key={f.name}>{f.name}</li>)}</ul>;
}
