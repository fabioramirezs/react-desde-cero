import React from "react"


class Form extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }

/*      this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this) */
        this.cambiarCampo = this.cambiarCampo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    cambiarCampo({value}, type){
        this.setState({
            [type]: value
        })
    }

    cambiarFecha(){

        this.setState({
            fecha: new Date()
        })
    }

/*     cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })        
    }
    cambiarCorreo(e){

        this.setState({
            correo: e.target.value
        })
    } */

    render(){
        return (
        <div className="ed-grid"><h1>Formulario {this.props.name}</h1>
            <h4>Fecha actual: {Math.ceil(this.state.fecha/1000)}</h4>
            <form id="formulario">
                <div className="ed-grid m-grid-2">
                <div className="form__item">
                                    <label>Nombre Completo</label>
                                    <input type="text" 
                                    onChange={(e) => {this.cambiarCampo(e.target, "nombre")}}
                                    />
                                </div>       
                                <div className="form__item">
                                    <label>Correo Electronico</label>
                                    <input type="email" onChange={(e) => this.cambiarCampo(e.target, "correo")}/>
                                </div> 
                                {/* <div className="form__item">
                                    <input type="submit" value="Enviar" className="button full"></input>
                                </div> */}
                </div>
            </form>    
            <h3>{`Hola ${this.state.nombre}`}</h3>
            <span>{`Tu correo es: ${this.state.correo}`}</span>        
            </div>
        )
    }


    componentDidMount(){
        let elemento = document.getElementById("formulario") 
        this.intervaloFecha = setInterval(()=> {
            this.cambiarFecha()
            console.log(new Date())
        },1000)
    }

    componentDidUpdate(prevProps, prepState){
        //console.log(prepState)
    }

    componentWillUnmount(){
        clearInterval(this.intervaloFecha)
    }

}
export default Form