import { TAGS } from '@/lib/constants';
export function TagFilter() {
  return <div className="flex gap-2">{TAGS.map((t) => <button key={t} className="rounded-full bg-slate-800 px-3 py-1 text-xs">{t}</button>)}</div>;
}
