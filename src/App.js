import React from 'react';
import { Provider } from "react-redux";
import store from "./store"
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSelecionado';
// estilos
import "./css/main.css"


const App = ()=>(
  
  <Provider store={store}>
        <main>
          <div className='header'>
            <h1>Manager Soccer</h1>
            </div>
        
        <Jugadores/>
        <EquipoSeleccionado />
        </main>

  </Provider>
  
)

export default App;
