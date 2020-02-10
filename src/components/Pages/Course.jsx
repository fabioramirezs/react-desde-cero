import React from "react"
import useCourse from "../CustomHooks/useCourse"

const Course = ({ match })=>{
      const course = useCourse(match.params.id)

       return(       
        <div className="ed-grid m-grid-3">
            {
                course ?(
                <>
                    <h1 className="m-cols-3">{course.title}</h1>
                    <img className="m-cols-1" src= {course.image} alt={course.title}/>
                    <p className="m-cols-2">Profesor: {course.professor}</p>
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src={course.imageProfessor} alt={course.imageProfessor} />
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

