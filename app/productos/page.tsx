import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Productos - Rivacolor',
};

export default function ProductosPage() {
  return <PageShell title="Productos" />;
}
