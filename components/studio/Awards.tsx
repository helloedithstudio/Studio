export default function Awards() {
  return (
    <>
      <section className="component component--awards awards" data-component="awards">
        <div className="container --large --m-xxlarge">
          <div className="first --parallax">
            <div className="wysiwyg --xsmall" data-increment="0.8">
              <p>
                house rules
              </p>
            </div>
            <div className="wysiwyg --xxlarge" data-increment="0.8">
              <p>
                Nothing ships unchallenged.
                <br />
                Every claim comes with a source.
                <br />
                If the honest answer is no, we say no.
              </p>
            </div>
          </div>
          <div className="second --parallax" data-parallax="-75">
            <div className="wysiwyg --xsmall" data-increment="0.8">
              <p>
                These rules bind every mind in the room, human or not. Recognition is nice. Being right is better. So we check, we question, and we look for the idea that still holds when someone pushes on it.
              </p>
            </div>
            <div className="image">
              <img loading="eager" src="/assets/2026/01/edith_showcase_alt.jpg" alt="edith. showcase art" width="1920" height="804" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
