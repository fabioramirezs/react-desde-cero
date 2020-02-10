import {useState, useEffect} from 'react'
import Axios from 'axios'

const useCourse = id => {
    const [course,setCourse] = useState({})  

    useEffect(()=>{
      Axios.get(`https://my-json-server.typicode.com/fabioramirezs/json-db/cursos/${id}`)
      .then(response => setCourse(response.data))
    },[])
    
    return course
}


export default useCourse