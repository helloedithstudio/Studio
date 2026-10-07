export default function HeroUnfolded() {
  return (
    <>
      <section className="component component--hero-unfolded hero-unfolded" data-component="hero-unfolded">
        <div className="container --wide">
          <div className="video --cover">
            <video preload="metadata" autoplay-onscroll="" loop playsInline muted poster="/media/posters/unfolded-hero.png">
              <source src="/media/studio1-loop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="overlay --20" />
          <div className="text-group --text-white --text-center">
            <div className="image --cover --parallax">
              <img width="449" height="60" src="/assets/2025/04/unfolded.svg" data-src="/assets/2025/04/unfolded.svg" alt="unfolded" />
            </div>
            <h1 className="title --large" data-increment="0.8">
              the experiential space. where, creativity meets technology
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
