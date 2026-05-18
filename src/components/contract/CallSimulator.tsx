'use client';
import { useSimulate } from '@/hooks/useSimulate';
export function CallSimulator({ contractId }: { contractId: string }) {
  const { run, result, loading } = useSimulate(contractId);
  return (
    <div className="space-y-2">
      <button disabled={loading} onClick={() => run('version')} className="rounded bg-blue-600 px-3 py-1 text-sm">Simulate</button>
      <pre className="text-xs">{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
