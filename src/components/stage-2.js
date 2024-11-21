import React, {useContext} from 'react';

import {Context} from '../context';

export const Stage2 = () => {
    const context = useContext(Context);

    return (
        <>
            <div className='result-wrapper'>
                <h3>The loser is: </h3>
                <div>{context.state.result}</div>
            </div>

            <div>
                <button
                    className='action-button'
                    onClick={() => context.reset()}
                >
                    Start over
                </button>
                <button
                    className='action-button btn-2'
                    onClick={() => context.getNewLoser()}
                >
                    Get new loser
                </button>
            </div>
        </>
    );
}
