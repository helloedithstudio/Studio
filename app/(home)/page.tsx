import PageShell from '@/components/PageShell';
import Block2 from '@/components/home/Block2';
import Block3 from '@/components/home/Block3';
import HeroHome from '@/components/home/HeroHome';
import ImageWide from '@/components/home/ImageWide';
import VideoAnimation from '@/components/home/VideoAnimation';

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
