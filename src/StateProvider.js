// "data layer" se usa para mantener el estado global de variables y objetos a utilizar en diferentes componentes
import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();

export const StateProvider =({reducer, initialState, children}) => (
<StateContext.Provider value={useReducer(reducer,initialState)}> {/*reducer function is to listen to any change in the data layer, for example setting the user after the login*/}
    {children} {/*children represents the entire App (see index.js file)*/}
</StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);