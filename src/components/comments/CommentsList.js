import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const CommentsList = ({ postId }) => {
    const [comments, setComments] = useState([])
    const fetchData = async () => {
        const res = await axios.get(`http://localhost:3001/posts/${postId}/comments`)
        setComments(res.data)

    }

    useEffect(() => {
        fetchData();
    }, []);

    const renderedComments =
        comments.map((comment) => {
            return <li key={comment.id}>{comment.content}</li>
        })

    return (
        <div className='container'>
            <ul>
                {renderedComments}


            </ul>


        </div>
    )
}
