import React, { useState } from 'react';
import './Input.css';

import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';
import Button from '@material-ui/core/Button';

function Input() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
        dispatch(saveTodo({
            name: input,
            done: false,
            id: Date.now()
        }))
    }

    return (
        <div className='input'>
            <input type='text>' value={input} onChange={e => setInput(e.target.value)}/>
            <Button onClick={addTodo} variant="contained" color="primary">Add</Button>
        </div>
    )
}

export default Input;
