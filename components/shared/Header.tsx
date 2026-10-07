export default function Header({ active }: { active?: string }) {
  return (
    <>
      <header id="header" className="header" data-component="header" data-desktop="">
        <div className="container --wide">
          <div id="logo" className="header__logo">
            <a href="/" className="logo --secondary">
              <img src="/assets/2025/04/logo_white.svg" className="logo-white" alt="Go to Home page" width="100%" height="100%" />
            </a>
          </div>
          <div className="header__menu">
            <nav>
              <ul id="menu-main-menu" className="menu__header">
                <li id="menu-item-257" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-257 menu-item-studio${active === "studio" ? " active is-active" : ""}`}>
                  <a href="/studio" data-taxi-ignore="">
                    studio
                  </a>
                </li>
                <li id="menu-item-255" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-255 menu-item-unfolded${active === "unfolded" ? " active is-active" : ""}`}>
                  <a href="/unfolded" data-taxi-ignore="">
                    unfolded
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div id="color-mode" className="color-mode" data-desktop="">
          <svg width="33.94" height="33.978" viewBox="0 0 33.94 33.978" xmlns="http://www.w3.org/2000/svg">
            <g id="Grupo_2241" data-name="Grupo 2241" transform="translate(-1810 -10)">
              <circle id="Elipse_23" data-name="Elipse 23" cx="15" cy="15" r="15" transform="translate(1810 10)" fill="#fff" />
              <path id="Trazado_4702" data-name="Trazado 4702" d="M14,0A14,14,0,1,1,0,14,14,14,0,0,1,14,0Z" transform="translate(1811 11)" fill="#0c0c15" />
              <g id="Grupo_2241-2" data-name="Grupo 2241" transform="translate(149.319 -783.121) rotate(25)">
                <path id="Rectángulo_100" data-name="Rectángulo 100" d="M0,0H0A14.47,14.47,0,0,1,14.47,14.47v.283a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(1860 10)" fill="#fff" />
                <path id="Rectángulo_101" data-name="Rectángulo 101" d="M0,0H14.47a0,0,0,0,1,0,0V.283A14.47,14.47,0,0,1,0,14.753H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(1860 23.77)" fill="#fff" />
              </g>
            </g>
          </svg>
        </div>
      </header>
      <div className="cta" data-desktop="">
        <a href="/contact" className="link" data-taxi-ignore="">
          let’s talk
        </a>
      </div>
      <div className="circle" />
    </>
  );
}
