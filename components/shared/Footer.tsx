import FooterLinks from '@/components/shared/FooterLinks';

export default function Footer() {
  return (
    <>
      <footer className="footer" id="footer" data-component="footer">
        <div className="container --xlarge --m-mlarge">
          <div id="logo" className="footer__logo">
            <a href="/" className="logo --dark" aria-label="Go to Home page">
              <img src="/assets/2025/04/logo_white.svg" className="logo-white" alt="Go to Home page" width="100%" height="100%" />
            </a>
          </div>
          <div className="wysiwyg --small --text-left --na" data-increment="0.8">
            <p>
              Have an idea
              <br />
              worth making real?
              <br />
              <a className="link --text" href="/contact/" data-taxi-ignore="">
                Let’s make something strange.
              </a>
            </p>
          </div>
          <FooterLinks />
          <div className="columns columns--bottom">
            <div className="item" />
            <div className="item">
              <div className="image shapes">
                <img src="/assets/2025/05/01hero_frame.svg" alt="edith shapes" width="100%" height="100%" />
              </div>
              <div className="copyright">
                <div className="wysiwyg --xxsmall --text-left --na" data-increment="0.8">
                  <p>
                    Edith Entertainment ©2025 EDITH –
                    <a className="link --text" href="/legal-notice/" data-taxi-ignore="">
                      Legal Notice
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
