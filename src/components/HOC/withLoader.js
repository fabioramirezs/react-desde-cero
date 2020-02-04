import React, { Component } from 'react'


const withLoader = (propName,WrappedComponent) => {
    return class WithLoader extends Component {
        constructor(props){
            super(props)
        }
        render(){
            return  this.props[propName].length === 0 
            ? <h3>Cargando...</h3> 
            : <WrappedComponent {...this.props} />
        }
    }
}
export default withLoader