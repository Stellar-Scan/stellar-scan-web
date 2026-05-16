'use client';
import { useContract } from '@/hooks/useContract';
import { ContractHeader } from '@/components/contract/ContractHeader';
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton';

export default function ContractPage({ params }: { params: { contractId: string } }) {
  const { data, isLoading } = useContract(params.contractId);
  if (isLoading) return <LoadingSkeleton />;
  if (!data) return <p>Contract not found</p>;
  return <ContractHeader contract={data} />;
}
