import Link from 'next/link';
export function ContractTabs({ id }: { id: string }) {
  return (
    <nav className="flex gap-4 border-b border-slate-800 py-2 text-sm">
      <Link href={`/contracts/${id}/functions`}>Functions</Link>
      <Link href={`/contracts/${id}/events`}>Events</Link>
    </nav>
  );
}
