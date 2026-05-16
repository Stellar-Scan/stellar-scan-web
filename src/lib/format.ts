export function truncateAddress(addr: string, left = 4, right = 4) {
  if (addr.length <= left + right + 1) return addr;
  return `${addr.slice(0, left)}…${addr.slice(-right)}`;
}

export function formatLedger(n: number) {
  return n.toLocaleString();
}
