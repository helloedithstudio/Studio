export default function Block3() {
  return (
    <>
      <section className="component component--block-3 block-3" data-component="block-3">
        <div className="container --xlarge --m-wide" data-parallax="-15">
          <div className="first --parallax">
            <div className="title --medium --delta" data-increment="0.8">
              dimensional
              <br />
              values, experiential
              <br />
              frames
            </div>
            <div className="video --delta">
              <video preload="metadata" autoplay-onscroll="" loop playsInline muted poster="/media/posters/art-frames.png">
                <source src="/media/art-frames.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="second --parallax" data-parallax="-125">
            <div className="image --delta">
              <img width="200" height="333" src="/assets/2025/10/home_art_07_4.jpg" data-src="/assets/2025/10/home_art_07_4.jpg" alt="" />
            </div>
            <div className="wysiwyg --xxlarge --delta" data-increment="0.8">
              <p>
                invisible landscape
                <br />
                mindsets
              </p>
            </div>
          </div>
          <div className="third --parallax">
            <div className="wysiwyg --xsmall --delta" data-increment="0.8">
              <p>
                landing out off
                <br />
                repetition
              </p>
            </div>
            <div className="video --delta">
              <video preload="metadata" autoplay-onscroll="" loop playsInline muted poster="/media/posters/art-repetition.png">
                <source src="/media/art-repetition.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
