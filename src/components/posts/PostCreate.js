import axios from 'axios';
import React, { useState } from 'react'


export const PostCreate = () => {

    const [text, setText] = useState('');
    const submitHandler = async (e) => {
        e.preventDefault();
        // make the post req to corresponding port here : 3000
        await axios.post(`http://localhost:3000/posts`, {
            title : text
        })
        setText('')
    }
    return (
        <div>
            <h3>Create a new Post  :</h3>

            <form onSubmit={submitHandler}>
                <div className='form-group'>
                    <label>Title</label>
                    <input className='form-control' value={text} type='text' name='title'

                        onChange={(e) => setText(e.target.value)}
                    />

                </div>
                <button className='btn btn-primary'>Submit</button>

            </form>
        </div>
    )
}
