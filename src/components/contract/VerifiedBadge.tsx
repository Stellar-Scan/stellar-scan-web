export function VerifiedBadge({ verified }: { verified: boolean }) {
  return <span className={verified ? 'text-emerald-400' : 'text-slate-500'}>{verified ? 'Verified' : 'Unverified'}</span>;
}
