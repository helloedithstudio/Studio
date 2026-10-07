import PageShell from '@/components/PageShell';
import Block5 from '@/components/unfolded/Block5';
import Block6 from '@/components/unfolded/Block6';
import HeroUnfolded from '@/components/unfolded/HeroUnfolded';
import Visit from '@/components/unfolded/Visit';

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
