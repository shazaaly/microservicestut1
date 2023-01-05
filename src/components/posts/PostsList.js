import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CommentsCreate } from '../comments/CommentsCreate';
import { CommentsList } from '../comments/CommentsList';

export const PostsList = () => {
    const [posts, setPosts] = useState({});
    //fetch posts by GET req:
    const fetchPosts = async () => {
        const res = await axios.get(`http://localhost:3000/posts`)
        setPosts(res.data)
    }
    useEffect(() => {
        fetchPosts()

    }, [])

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div key={post.id} className="card" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title .</p>
                </div>
                {/* Display comments here  */}
                <CommentsList postId={post.id} />

                <CommentsCreate postId={post.id} />


            </div>
        )

    })

    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderedPosts}
        </div>




    )
}
