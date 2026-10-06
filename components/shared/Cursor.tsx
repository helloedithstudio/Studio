export default function Cursor() {
  return (
    <>
      <div id="cursor">
        <div className="cursor__dot">
          <div className="bg" />
          <div className="icon center" />
        </div>
        <div className="cursor__book">
          <div className="text">
            <span className="link --large">
              book your visit
            </span>
          </div>
        </div>
        <div className="cursor__reel video__trigger">
          <div className="text">
            <span>
              +
            </span>
          </div>
        </div>
        <div className="cursor__more">
          <div className="text">
            <span>
              <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.85718 2.14307L21.8572 15.0002L1.85718 27.8574V2.14307Z" stroke="white" strokeWidth="2.85714" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
        <div className="cursor__small">
          <div className="text">
            <span>
              +
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
