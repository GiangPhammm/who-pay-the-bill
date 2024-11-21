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

    const addPlayerHandler = (name) => {
        setState((prevState) => ({
            ...prevState,
            players: [
                ...prevState.players,
                name,
            ]
        }))
    }

    return (
        <Context.Provider value={{
            state,
            addPlayer: addPlayerHandler
        }}>
            {props.children}
        </Context.Provider>
    );
}