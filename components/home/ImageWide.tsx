export default function ImageWide() {
  return (
    <>
      <section className="component component--image-wide" data-component="image-wide">
        <div className="container --xxxlarge">
          <div className="wysiwyg --medium --delta" data-increment="0.8">
            <p>
              between presence
              <br />
              and perception
            </p>
          </div>
          <div className="video --delta" data-desktop="">
            <video preload="metadata" loop playsInline muted autoplay-onscroll="" poster="/media/posters/art-wide.png">
              <source src="/media/art-wide.mp4" type="video/mp4" />
              Su navegador no soporta la etiqueta de vídeo
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
