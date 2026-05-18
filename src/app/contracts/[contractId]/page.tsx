'use client';
import { useContract } from '@/hooks/useContract';
import { ContractHeader } from '@/components/contract/ContractHeader';
import { ContractTabs } from '@/components/contract/ContractTabs';
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton';
import { WasmViewer } from '@/components/contract/WasmViewer';

export default function ContractPage({ params }: { params: { contractId: string } }) {
  const { data, isLoading } = useContract(params.contractId);
  if (isLoading) return <LoadingSkeleton />;
  if (!data) return <p>Contract not found</p>;
  return (
    <section className="space-y-4">
      <ContractHeader contract={data} />
      <ContractTabs id={params.contractId} />
      <WasmViewer hash={data.wasm_hash} />
    </section>
  );
}
