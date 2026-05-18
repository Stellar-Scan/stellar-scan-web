export function Pagination({ cursor, onNext }: { cursor?: string; onNext: () => void }) {
  return cursor ? <button onClick={onNext} className="text-sm text-blue-400">Next</button> : null;
}
