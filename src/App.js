import React from 'react';
import "./styles/styles.scss";
import Curso from "./Curso"

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="bsnner" src="https://image.winudf.com/v2/image/Y29tLndhbGxwYXBlcmNpdHkub21haXNfc2NyZWVuXzRfMTUyMjY2MDA0Ml8wNDc/screen-4.jpg?fakeurl=1&type=.jpg" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de EDteam</p>
            <p> Tu futuro te espera</p>
            <a href="http:wwww.edteam.com" className="button">Suscribirse</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
          <Curso />
          <Curso />
    </div>
</>
)
export default App;
