import React from 'react';
import { connect } from 'react-redux';
import '../css/main.css';

const Jugadores = ({jugadores, agregarTitular,agregarSuplentes}) =>(
 <section>
     <h2>Gamer</h2>
     <div className="container-gamer">
         {
             jugadores.map( j=>(
                 <article className="gamer" key={j.id}  >
                            <img className="img-gamer" src={j.foto} alt={j.nombre}/>
                            <h3 >{j.nombre}</h3>
                            <button className="btn-titular" onClick={()=> agregarTitular(j)} >Titular</button>
                            <button className="btn-suplente" onClick={()=> agregarSuplentes(j)} >Suplente</button>
                 </article>
             ))
         }
            
     </div>
 </section>
)

const mapStateToProps = state => ({
    jugadores: state.jugadores
})

const mapDispathToProps = dispatch =>({
    agregarTitular(jugador){
        dispatch({
            type:"Agregar_Titular",
            jugador
        })
    },
    agregarSuplentes(jugador){
        dispatch({
            type:"Agregar_Suplente",
            jugador
        })
    }
})

export default connect ( mapStateToProps,mapDispathToProps)(Jugadores) 