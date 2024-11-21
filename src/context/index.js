import React, {useState} from 'react';

export const Context = React.createContext();

export const Provider = (props) => {
    const [state, setState] = useState(
        {
            stage: 1,
            players: [],
            result: '',
        }
    )

    return (
        <Context.Provider value={{state}}>
            {props.children}
        </Context.Provider>
    );
}