import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { pageMetadata } from '@/lib/seo';
import Awards from '@/components/studio/Awards';
import Block4 from '@/components/studio/Block4';
import Careers from '@/components/studio/Careers';
import Contact from '@/components/studio/Contact';
import ExploreProjects from '@/components/studio/ExploreProjects';
import HeroStudio from '@/components/studio/HeroStudio';
import SubheroStudio from '@/components/studio/SubheroStudio';
import Team from '@/components/studio/Team';

export const metadata: Metadata = pageMetadata({
  title: 'Studio - Edith Studio',
  description: 'Edith is more than a studio. AI agents and curious people build side by side: identities, digital experiences and experiments, for clients worldwide.',
  path: '/studio',
});

export default function Studio() {
  return (
    <PageShell slug="studio">
      <HeroStudio />
      <SubheroStudio />
      <Block4 />
      <Team />
      <Awards />
      <ExploreProjects />
      <Contact />
      <Careers />
    </PageShell>
  );
}
