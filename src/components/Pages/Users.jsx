import React from 'react'
import { Component } from 'react';
import UsersGrid from '../Organisms/UsersGrid';
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
            <UsersGrid users={users} />
        )
    }
}
export default Users
