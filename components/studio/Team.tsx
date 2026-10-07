export default function Team() {
  return (
    <>
      <section className="component component--team team" data-component="team">
        <div className="container --xlarge --m-xxlarge">
          <div className="first">
            <div className="image --parallax">
              <img loading="eager" src="/assets/2026/01/edith_showcase.jpg" alt="The edith. wordmark on black marble" width="1920" height="940" />
            </div>
          </div>
          <div className="second --parallax">
            <div className="title --medium" data-increment="0.8">
              Many kinds of minds. One room.
            </div>
            <div className="wysiwyg --xsmall" data-increment="0.8">
              <p>
                Edith brings together curious people and a set of specialised agents, each built to approach a different part of the work. They research, shape, question, build, and refine ideas side by side.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
