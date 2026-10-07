import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { pageMetadata } from '@/lib/seo';
import Block2 from '@/components/home/Block2';
import Block3 from '@/components/home/Block3';
import HeroHome from '@/components/home/HeroHome';
import ImageWide from '@/components/home/ImageWide';
import VideoAnimation from '@/components/home/VideoAnimation';

export const metadata: Metadata = pageMetadata({
  title: 'Edith Studio: where AI agents and curious minds work in unison',
  description: 'Edith is where AI agents and curious minds work in unison. An independent studio for design, art and technology, working with clients worldwide.',
  path: '/',
});

export default function Home() {
  return (
    <PageShell slug="inicio">
      <HeroHome />
      <VideoAnimation />
      <Block2 />
      <ImageWide />
      <Block3 />
    </PageShell>
  );
}
