import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { pageMetadata } from '@/lib/seo';
import Block5 from '@/components/unfolded/Block5';
import Block6 from '@/components/unfolded/Block6';
import HeroUnfolded from '@/components/unfolded/HeroUnfolded';
import Visit from '@/components/unfolded/Visit';

export const metadata: Metadata = pageMetadata({
  title: 'Unfolded - Edith Studio',
  description: "Unfolded is Edith's experiential space, where creativity meets technology. See how an idea becomes something you can step inside.",
  path: '/unfolded',
});

export default function Unfolded() {
  return (
    <PageShell slug="unfolded">
      <HeroUnfolded />
      <Block5 />
      <Block6 />
      <Visit />
    </PageShell>
  );
}
