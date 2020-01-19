import React from 'react';
import "./styles/styles.scss";
import Curso from "./Curso"


const cursos = [
  {
    title: "React desde cero",
    image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    price: 40,
    profesor: "Beto Quiroga",
    imageProfesor: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
  },
  {
    title: "Drupal desde cero",
    image: "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
    price: 50,
    profesor: "Alvaro Felipe",
    imageProfesor: "https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"

  },
  {
    title: "Go desde cero",
    image: "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
    price: 30,
    profesor: "Alexis Lozada",
    imageProfesor: "https://api.ed.team/files/avatars/747dea4d-4438-4a7e-904a-427a5cd6aac7.jpg"
  }
]


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
      {
          cursos.map(curso => <Curso            
            title= {curso.title}
            image= {curso.image}
            price= {curso.price}
            profesor= {curso.profesor}
            imageProfesor={curso.imageProfesor}            
            />)
      }
    </div>
</>
)
export default App;
