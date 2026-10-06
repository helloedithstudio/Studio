import PageShell from '@/components/PageShell';
import Awards from '@/components/studio/Awards';
import Block4 from '@/components/studio/Block4';
import Careers from '@/components/studio/Careers';
import Contact from '@/components/studio/Contact';
import ExploreProjects from '@/components/studio/ExploreProjects';
import HeroStudio from '@/components/studio/HeroStudio';
import SubheroStudio from '@/components/studio/SubheroStudio';
import Team from '@/components/studio/Team';

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
