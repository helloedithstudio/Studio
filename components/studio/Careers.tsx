// A section of its own (styles: .catalysts in globals.css). It must not use data-component="careers" or the
// .component--careers class: the theme mounts the job-popup component and its narrow column layout on those.
export default function Careers() {
  return (
    <>
      <section className="catalysts" data-component="catalysts">
        <div className="catalysts__inner">
          <p className="catalysts__label">the club</p>
          <h2 className="catalysts__title">Don’t wait to be asked.</h2>
          <div className="catalysts__row">
            <p className="catalysts__text">
              Edith is a club of builders where people and agents work as one. Catalysts are the ones who start things.
            </p>
            <div className="catalysts__actions">
              <a href="https://edith-plum.vercel.app/" className="catalysts__cta" data-taxi-ignore="">
                <span>Become a Catalyst</span>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M5 17L17 5M17 5H7M17 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                </svg>
              </a>
              <p className="catalysts__note">
                Need a project built instead? <a href="mailto:hello.edithstudio@gmail.com">hello.edithstudio@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
