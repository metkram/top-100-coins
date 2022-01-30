import React from 'react';
import ReactDOM from 'react-dom';
import { store } from "./store/index";
import { Index } from "./components/Index";
import App from './components/App';
import { CoinDecription } from "./components/CoinDescription";
import { Provider } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import "materialize-css/dist/css/materialize.min.css";

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<App />} />
            <Route path=":coinName" element={<CoinDecription />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>,
  document.getElementById('root')
);
