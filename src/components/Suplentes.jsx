import React from 'react';
import { connect } from 'react-redux';
import '../css/main.css'

const Suplentes = ({suplentes, Quitar_suplente})=>(
    <section>
        <h2>Suplentes</h2>
        <div className="banquillo" >
            {
                suplentes.map( j =>(
                    <article className="suplentes" key={j.id} >
                        <div>
                        <img className="img-gamer" src={ j.foto} alt={j.nombre}/>     
                        <button className="btn-close" onClick={()=>Quitar_suplente(j)} >X</button>
                        </div>   
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)
const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispathToProps = dispatch =>({
    Quitar_suplente(jugador){
        dispatch({
            type:"Quitar_suplente",
            jugador
        })
    }
})

export default connect(mapStateToProps ,mapDispathToProps)(Suplentes)