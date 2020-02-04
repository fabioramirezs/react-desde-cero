import React from 'react';
import "../styles/styles.scss";
import Courses from "./Pages/Courses";
import Form from "./Pages/Form"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Course from './Pages/Course';
import Header from './Organisms/Header';
import Home from './Pages/Home';
import Users from './Pages/Users';


const App = () => (
  <Router>
    <Header />
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/cursos/:id"  component={Course}/>
    <Route path="/cursos"  component={Courses}/>   
    <Route path="/usuarios" component={Users}/>
    <Route path="/formulario"  component={()=><Form name="Página de contacto"/>}/>
    <Route component= {() => (
      <div className="ed-grid">
        <h1>Error 404</h1>
        <span>Página no encontrada</span>
      </div>
    )}/>

    </Switch>    
</Router>
)
export default App;
