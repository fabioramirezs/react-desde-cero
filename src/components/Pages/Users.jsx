import React from 'react'
import { Component } from 'react';
import UserCard from '../Molecules/UserCard';
import Axios from 'axios';

class Users extends Component{

    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }
/*     componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users', {method:'get'})
        .then(response => response.json())
        .then(json => {
            this.setState({
                users: json
            })
        })
    } */

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({
                users: response.data
            })    
        })
    }

    render(){        
        const {users} = this.state 
        return(

            <div className="ed-grid">
                 <h1>Usuarios</h1>
                <div className="ed-grid m-grid-3">
                    {
                    users.map(u => (
                        <UserCard 
                            key = {u.id}
                            name = {u.name}
                            username = {u.username}
                            email = {u.email}                        
                        />
                    ))
                    }
                </div>
            </div>
        )
    }
}
export default Users
