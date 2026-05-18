'use client';
import { useContract } from '@/hooks/useContract';
import { FunctionList } from '@/components/contract/FunctionList';
import { CallSimulator } from '@/components/contract/CallSimulator';

export default function FunctionsPage({ params }: { params: { contractId: string } }) {
  const { data } = useContract(params.contractId);
  return (
    <section className="space-y-4">
      <FunctionList fns={data?.functions ?? []} />
      <CallSimulator contractId={params.contractId} />
    </section>
  );
}
