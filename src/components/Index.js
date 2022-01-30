import { useEffect } from "react";
import M from "materialize-css";
import { Outlet } from "react-router-dom";

export function Index() {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  }, []);
  return (
    <div className="page-flexbox-wrapper">
      <header>
        <nav className="green lighten-3">
          <div className="container">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">Coins</a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="https://github.com/metkram/top-100-coins">GitHub repo</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li><a href="https://github.com/metkram/top-100-coins">GitHub repo</a></li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="page-footer green lighten-3">
        <div className="footer-copyright">
          <div className="container">
          Information is parsed using Coingecko API
          <a className="grey-text text-lighten-4 right" href="https://www.coingecko.com/">Visit Coingecko</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
