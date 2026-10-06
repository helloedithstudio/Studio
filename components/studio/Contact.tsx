export default function Contact() {
  return (
    <>
      <section className="component component--contact contact" data-component="contact">
        <div className="container --large">
          <div className="text-group">
            <div className="wysiwyg --xsmall" data-increment="0.8">
              <p>
                And the question we asked ourselves: what got us here?
                <br />
                Well… not knowing how to say no.
              </p>
            </div>
            <h1 className="title --medium" data-increment="0.8">
              like Mark Twain said, “they didn’t know it was impossible, so they did it.”
            </h1>
            <div className="wysiwyg --xsmall" data-increment="0.8">
              <p>
                And that’s exactly how we roll.
                <br />
                Ready to create something unforgettable?
              </p>
            </div>
          </div>
          <a href="/contact/" className="link --xlarge" data-taxi-ignore="">
            <div className="text">
              let´s talk
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
