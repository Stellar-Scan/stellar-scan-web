'use client';
import { EventFeed } from '@/components/contract/EventFeed';
export default function EventsPage({ params }: { params: { contractId: string } }) {
  return <EventFeed id={params.contractId} />;
}
