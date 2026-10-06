export default function VideoAnimation() {
  return (
    <>
      <section className="component component--video-animation" data-component="video-animation">
        <div className="container --wide">
          <div className="title --medium --delta" data-increment="0.8">
            folds in
            <br />
            perception
          </div>
          <div className="clip">
            <div className="video-group --m-auto">
              <div className="video --cover">
                <div className="video__player">
                  <video preload="metadata" loop playsInline muted autoplay-onscroll="" data-desktop="" poster="/media/posters/reel-loop.png">
                    <source src="/media/reel-loop.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="overlay --20" />
              </div>
            </div>
          </div>
          <div className="player">
            <div className="player__mask" />
            <div className="player__inner">
              <div className="floating --center">
                <video preload="none" playsInline controls controlsList="nodownload" disablePictureInPicture data-desktop="" poster="/media/posters/reel-full.png">
                  <source src="/media/reel-full.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="player__closer closer floating --top">
              <div className="closer__icon">
                <div className="closer__icon__item --top" />
                <div className="closer__icon__item --middle" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
