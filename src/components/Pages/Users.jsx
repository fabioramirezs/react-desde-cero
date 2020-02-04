import React from 'react'
import { Component } from 'react';


class Users extends Component{

    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }

    render(){
        return(

            <div className="ed-grid">
                 <h1>Usuarios</h1>   
            </div>
        )
    }
}
export default Users
