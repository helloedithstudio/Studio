export default function Awards() {
  return (
    <>
      <section className="component component--awards awards" data-component="awards">
        <div className="container --large --m-xxlarge">
          <div className="first --parallax">
            <div className="wysiwyg --xsmall" data-increment="0.8">
              <p>
                awards
              </p>
            </div>
            <div className="wysiwyg --xxlarge" data-increment="0.8">
              <p>
                edith. has been recognized with awards like the LAUS and Evento Plus, and we’ve made our mark internationally, earning top honors at Moscow’s Circle of Light festival.
              </p>
            </div>
          </div>
          <div className="second --parallax" data-parallax="-75">
            <div className="wysiwyg --xsmall" data-increment="0.8">
              <p>
                We’ve also participated in many major design and audiovisual festivals along the way. Recognition is nice. Curiosity is better. We keep looking for the unexpected—the idea that changes the frame instead of fitting inside it.
              </p>
            </div>
            <div className="image">
              <img loading="eager" src="/assets/2026/01/edith_atic.jpg" alt="" width="1440" height="720" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
