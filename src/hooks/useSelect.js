import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {
    
    //State del custom hook
    const [ state, actualizarState ] = useState(stateInicial);

    //Esta sintaxis me parece difícil de ver 🤷‍♀️ me inclinaria por no abusar del return implicito
    const SelectNoticias = () => 
    (
        <select
        className="browser-default"
        value={state}
        onChange={ e => actualizarState(e.target.value)}
        >            
        { opciones.map(opcion => (
            <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
        ))
        }
        </select>
    );
    

    return [state, SelectNoticias];
}
 
export default useSelect;