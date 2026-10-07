// Hand-edited after conversion: the scraped "places" section held the source studio's street addresses and phone
// numbers. Replaced with a single remote entry; change it when there is a real address to publish.
export default function ContactInfo2() {
  return (
    <>
      <section className="component component--contact-info contact-info" data-component="contact-info">
        <div className="container --xxlarge --m-large">
          <div className="text-group">
            <h1 className="title --medium" data-increment="0.8">
              places
            </h1>
          </div>
          <div className="info-group">
            <div className="item --1">
              <div className="flex">
                <div className="wysiwyg --xxsmall" data-increment="0.8">
                  Remote
                </div>
                <div className="text-group">
                  <div className="area">
                    <div className="title --xsmall --na" data-desktop="" data-increment="0.8">
                      Based in India,
                      <br />
                      working with clients
                      <br />
                      worldwide.
                    </div>
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
