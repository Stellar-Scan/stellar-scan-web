'use client';
import { useContractList } from '@/hooks/useContractList';
import { ContractTable } from '@/components/explorer/ContractTable';
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton';

export default function ContractsPage() {
  const { data, isLoading } = useContractList();
  if (isLoading) return <LoadingSkeleton />;
  return <ContractTable items={data?.items ?? []} />;
}
