export default function HeroHome() {
  return (
    <>
      <section className="component component--hero-home hero-home" data-component="hero-home">
        <div className="container --wide">
          <div className="first">
            <div className="left">
              <div className="image --delta">
                <img width="200" height="333" src="/assets/2025/06/sculpture_home_2.png" data-src="/assets/2025/06/sculpture_home_2.png" alt="" />
              </div>
              <div className="wysiwyg --xsmall --delta" data-increment="0.8">
                <p>
                  flying over
                  <br />
                  virtual skies and
                </p>
              </div>
            </div>
            <div className="center">
              <div className="image --delta --change-light">
                <img width="200" height="200" src="/assets/2025/06/edith_web_element_01_2_1.gif" data-src="/assets/2025/06/edith_web_element_01_2_1.gif" alt="" />
              </div>
              <div className="image --delta --change-dark">
                <img width="200" height="200" src="/assets/2025/06/edith_web_element_invert_01_2_1.gif" data-src="/assets/2025/06/edith_web_element_invert_01_2_1.gif" alt="" />
              </div>
              <div className="wysiwyg --xxsmall --delta" data-increment="1.2">
                <p>
                  poetics of
                  <br />
                  interference
                </p>
              </div>
            </div>
            <div className="right">
              <div className="video --delta">
                <video preload="metadata" autoplay-onscroll="" loop playsInline muted poster="/media/posters/hero-art.png">
                  <source src="/media/hero-art.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className="second">
            <div className="center">
              <div className="works1 --parallax">
                <a href="/work/echoes-living-installation" className="--delta --more" data-taxi-ignore="">
                  <div className="link">
                    Project
                  </div>
                  <div className="video">
                    <video preload="metadata" autoplay-onscroll="" loop playsInline muted poster="/media/posters/project-echoes.png">
                      <source src="/media/project-echoes.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="content">
                    <div className="wysiwyg --xxsmall">
                      ECHOES Living Installation
                    </div>
                    <div className="labels">
                      <div className="wysiwyg --xxsmall">
                        Installation
                      </div>
                      <div className="wysiwyg --xxsmall">
                        Interactive art
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="title --medium --delta" data-increment="1">
                the intersection
                <br />
                between design, art,
                <br />
                and technology
              </div>
              <div className="works2 --parallax" data-parallax="-85">
                <a href="/work/horitzo-the-shape-of-a-culinary-landscape" className="--delta --more" data-taxi-ignore="">
                  <div className="link">
                    Project
                  </div>
                  <div className="image">
                    <img width="200" height="133" src="/assets/2026/06/harts_home.jpg" data-src="/assets/2026/06/harts_home.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="wysiwyg --xxsmall">
                      Horitzó: a visual culinary journey
                    </div>
                    <div className="labels">
                      <div className="wysiwyg --xxsmall">
                        Projection mapping
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="third">
            <div className="left --parallax">
              <div className="wysiwyg --xxlarge --delta" data-increment="0.8">
                <p>
                  meets human
                  <br />
                  interaction.
                </p>
              </div>
              <div className="image --delta">
                <img width="720" height="840" src="/assets/2025/05/04_home.jpg" data-src="/assets/2025/05/04_home.jpg" alt="" />
              </div>
            </div>
            <div className="right --parallax" data-parallax="-205">
              <div className="image --delta --change-light">
                <img width="200" height="159" src="/assets/2025/06/edith_web_element_03_2.gif" data-src="/assets/2025/06/edith_web_element_03_2.gif" alt="" />
              </div>
              <div className="image --delta --change-dark">
                <img width="200" height="159" src="/assets/2025/06/edith_web_element_invert_03.gif" data-src="/assets/2025/06/edith_web_element_invert_03.gif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
