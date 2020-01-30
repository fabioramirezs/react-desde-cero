import React from "react"

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


const Course = ({ match })=>{

    const cursoSeleccionado = cursos.filter(c => c.id === parseInt(match.params.id))[0]

    return(
       
        <div className="ed-grid m-grid-3">
            {
                cursoSeleccionado ?(
                <>
                    <h1 className="m-cols-3">{cursoSeleccionado.title}</h1>
                    <img className="m-cols-1" src= {cursoSeleccionado.image} alt={cursoSeleccionado.title}/>
                    <p className="m-cols-2">Profesor: {cursoSeleccionado.profesor}</p>
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src={cursoSeleccionado.imageProfesor} alt={cursoSeleccionado.profesor} />
                        </div>
                    </div>                                        
                </>
                ):
                <h1>el curso no existe</h1>
            }
        </div>
        )
        }
export default Course

