import React from 'react';
import { connect } from 'react-redux';
import  '../css/main.css';

const Titulares = ({titulares, Quitar_titular })=>(
    <section>
        <h2>Titulares</h2>
        <div className="cancha" >
            
            {
                titulares.map( j => (
                    
                    <article className="titulares" key={j.id} >
                        <div>
                        <img  className="img-gamer" src={j.foto} alt={j.nombre}/>     
                        <button onClick={()=>Quitar_titular(j)} className="btn-close" >X</button>
                        </div>   
                        <p>{j.nombre}</p>
                       
                    </article>
                   
                ))
            }
             <img className="campo" src="https://cdn.pixabay.com/photo/2015/05/28/01/52/court-787406_960_720.jpg" alt="cancha"/>
        </div>
    </section>
)
const mapStateToProps = state => ({
    titulares: state.titulares
    
})

const mapDispathToProps = dispatch =>({
    Quitar_titular(jugador){
        dispatch({
            type:"Quitar_titular",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispathToProps)(Titulares)