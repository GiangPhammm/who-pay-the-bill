import React, {useState, useContext, useRef} from 'react';
import {Button, Form, Alert} from 'react-bootstrap';

import {Context} from '../context';

export const Stage1 = () => {
    const textInput = useRef();
    const context = useContext(Context);
    const [error, setError] = useState([false, '']);

    const handleSubmit = (e) => {
        // prevent rerender
        e.preventDefault();

        const value = textInput.current.value;
        const validate = validateInput(value);

        if (validate) {
            setError([false, '']);
            context.addPlayer(value);
            textInput.current.value = '';
        } else {
            console.log('error');
        }

    }

    const validateInput = (value) => {
        if(value === '') {
            setError([true, 'Sorry, you need to add something']);

            return false;
        }

        if (value.length <=2) {
            setError([true, 'Sorry, you need at least 3 char']);

            return false
        }

        return true;
    }

    console.log(context);

    return (
        <>
            <Form className='mt-4' onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Add player name'
                        name='player'
                        ref={textInput}
                    />
                </Form.Group>

                {error[0] ?
                    <Alert variant='danger'>
                        {error[1]}
                    </Alert>
                : null
                }

                <Button className='miami' variant='primary' type='submit'>
                    Add player
                </Button>
            </Form>
        </>
    );
}

