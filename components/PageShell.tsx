import AppScripts from '@/components/AppScripts';
import Cursor from '@/components/shared/Cursor';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import PopupForm from '@/components/shared/PopupForm';

// The page frame the theme JS (Taxi + GSAP) expects: #app > #flexible[data-taxi-view] > .inner, with the fixed
// chrome (header, cta, popup, cursor) as siblings. `slug` is what the theme uses to pick the active menu item.
export default function PageShell({ slug, children }: { slug: string; children: React.ReactNode }) {
  return (
    <>
      <div id="app" data-taxi="">
        <div id="flexible" className="flexible" data-taxi-view="default" data-taxi-slug={slug} data-section={slug}>
          <div className="background" />
          <div className="inner">
            <div className="canvas">
              <div id="unfolded-webgl" className="unfolded-webgl" />
            </div>
            {children}
            <Footer />
          </div>
        </div>
      </div>
      <div id="vhr" />
      <Header active={slug} />
      <PopupForm />
      <Cursor />
      <AppScripts />
    </>
  );
}
