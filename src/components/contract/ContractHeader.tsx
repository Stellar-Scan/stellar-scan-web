import type { Contract } from '@/types/contract';
import { AddressPill } from '@/components/ui/AddressPill';
import { VerifiedBadge } from '@/components/contract/VerifiedBadge';

export function ContractHeader({ contract }: { contract: Contract }) {
  return (
    <header className="space-y-2">
      <h1 className="text-2xl font-mono">{contract.contract_id}</h1>
      <div className="flex gap-3 items-center">
        <AddressPill value={contract.deployer} />
        <VerifiedBadge verified={contract.verified} />
      </div>
    </header>
  );
}
