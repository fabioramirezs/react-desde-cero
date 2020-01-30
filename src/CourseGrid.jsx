import React from "react"
import Curso from "./Curso"

const cursos = [
    {
      id: 1,
      title: "React desde cero",
      image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
      price: 40,
      profesor: "Beto Quiroga",
      imageProfesor: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    },
    {
      id: 2,
      title: "Drupal desde cero",
      image: "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
      price: 50,
      profesor: "Alvaro Felipe",
      imageProfesor: "https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg"
  
    },
    {
      id: 3,
      title: "Go desde cero",
      image: "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
      price: 30,
      profesor: "Alexis Lozada",
      imageProfesor: "https://api.ed.team/files/avatars/747dea4d-4438-4a7e-904a-427a5cd6aac7.jpg"
    }
  ]

const CourseGrid = () => (

<div className="ed-grid m-grid-3">
{cursos.map(curso => <Curso    
            key={curso.id}        
            title= {curso.title}
            image= {curso.image}
            price= {curso.price}
            profesor= {curso.profesor}
            imageProfesor={curso.imageProfesor}            
            />)}

</div>

)

export default CourseGrid
