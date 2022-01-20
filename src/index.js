import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { store } from "./store/index";
import { Provider } from "react-redux";
import './index.css';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import App from './App';

function Index() {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  }, []);
  return (
    <div>
      <nav className="green lighten-3">
        <div className="container">
          <div className="nav-wrapper">
            <a className="brand-logo">Coins</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="https://github.com/metkram/top-100-coins">GitHub repo</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li><a href="#">GitHub repo</a></li>
      </ul>
      <div className="container">
        <h1>Top 100 crypto coins</h1>
      </div>
      <App />
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

ReactDOM.render(
    <Provider store={store}>
      <Index />
    </Provider>,
  document.getElementById('root')
);
