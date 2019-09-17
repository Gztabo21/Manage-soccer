import { createStore} from "redux"; // para crear nuestro store

const initialState = {
    jugadores:[{
        id:1,
        nombre:"Cristiano Ronaldo",
        foto:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
    },{
        id:2,
        nombre:"Leonel Messi",
        foto:"https://upload.wikimedia.org/wikipedia/commons/b/b8/Messi_vs_Nigeria_2018.jpg"
    },
    {
        id:3,
        nombre:"Yeferson Soteldo",
        foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Universidad_de_Chile_-_Colo-Colo%2C_2018-04-15_-_Yeferson_Soteldo_%28cropped%29.jpg/800px-Universidad_de_Chile_-_Colo-Colo%2C_2018-04-15_-_Yeferson_Soteldo_%28cropped%29.jpg"
    }
],
    titulares:[],
    suplentes:[]
}

const reducerEntrenador =(state= initialState , action) =>{
    // action me permite modificar el State
    // el valor por deefecto de state  es indefinido
    if(action.type === "Agregar_Titular"){
        return{
            ...state,
            titulares:state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j=> j.id !== action.jugador.id)
        }
    }

    if(action.type === "Agregar_Suplente"){
        return{
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j=> j.id !== action.jugador.id)
        }
    }

    if(action.type === "Quitar_suplente"){
        return{
            ...state,
            suplentes: state.suplentes.filter(j=> j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    if(action.type === "Quitar_titular"){
        return{
            ...state,
            titulares: state.titulares.filter( j=> j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    return state

}
export default createStore(reducerEntrenador)