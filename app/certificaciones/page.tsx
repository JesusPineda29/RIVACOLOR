import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Certificaciones - Rivacolor',
};

export default function CertificacionesPage() {
  return <PageShell title="Certificaciones" />;
}
