import React, { Component } from "react"
import CourseGrid from "../Organisms/CourseGrid"
import Axios from "axios"


class Courses extends Component {
  constructor(props){
    super(props)

    this.state = {
      courses: []
        }
  }
  componentDidMount(){
    Axios.get('https://my-json-server.typicode.com/fabioramirezs/json-db/cursos')
    .then(response => {
      this.setState({
          courses: response.data
      })
    })
  } 
  
  render(){
    const {courses} = this.state
    return (
      <CourseGrid courses={courses}/>
      )
  }
}

export default Courses
