export default function ExploreProjects() {
  return (
    <>
      <section className="component component--explore-projects explore-projects" data-component="explore-projects">
        <div className="container --large --m-mlarge" />
        <div className="container --xxxlarge">
          <div className="second">
            <div className="video-group --m-auto">
              <div className="video">
                <div className="video__player">
                  <video preload="metadata" loop playsInline muted autoplay-onscroll="" data-desktop="" poster="/media/posters/studio-projects.png">
                    <source src="/media/studio-projects.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="player">
                <div className="player__mask" />
                <div className="player__inner">
                  <div className="floating --center">
                    <video preload="none" playsInline controls controlsList="nodownload" disablePictureInPicture data-desktop="" poster="/media/posters/studio-projects.png">
                      <source src="/media/studio-projects.mp4" type="video/mp4" />
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
          </div>
        </div>
      </section>
    </>
  );
}
