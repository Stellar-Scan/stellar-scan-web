'use client';
export function HashDisplay({ hash }: { hash: string }) {
  const short = `${hash.slice(0, 8)}…${hash.slice(-6)}`;
  return <code className="text-xs text-emerald-300">{short}</code>;
}
