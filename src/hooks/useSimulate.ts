'use client';
import { useState } from 'react';
import { API_URL } from '@/lib/constants';

export function useSimulate(contractId: string) {
  const [result, setResult] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const run = async (fn: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/contracts/${contractId}/simulate?fn=${fn}`);
      setResult(await res.json());
    } finally {
      setLoading(false);
    }
  };
  return { result, loading, run };
}
