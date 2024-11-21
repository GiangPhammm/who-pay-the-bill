import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    const removePlayerHandler = (index) => {
        let newArray = state.players;
        newArray.splice(index, 1);
        setState((prevState) => ({
            ...prevState,
            players: newArray,
        }))
    }

    // check if there are enough player
    // if not --> call toastify
    const nextHandler = () => {
        const {players} = state;

        if (players.length < 2) {
            toast.error('You need more than one player', {
                position: 'top-left',
                autoClose: 2000,
            });
        } else {
            console.log('move to stage 2')
        }
    }

    return (
        <>
            <Context.Provider value={{
            state,
                addPlayer: addPlayerHandler,
                removePlayer: removePlayerHandler,
                next: nextHandler,
            }}>
                {props.children}
            </Context.Provider>
            <ToastContainer />
        </>
    );
}