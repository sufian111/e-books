import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Image from '../Image/Image';
import picture from '../../fakedata/FakeData';

const PostDetail = () => {
    const { id } = useParams()

    const [post, setPost] = useState([])
    useEffect
        (() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(res => res.json())
                .then(data => setPost(data))
        }, [])

    const [comment, setComment] = useState([])
    useEffect
        (() => {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                .then(res => res.json())
                .then(data => setComment(data))
        }, [])


    const { title, body } = post;

    const styleA = {
        boxShadow: '2px 2px 15px',
        marginTop: '10px',
        padding: '10px',
    }

    const styleB = {
        marginTop: '10px',
        padding: '10px',
        border: '1px solid black'
    }

    const [pic, setPic] = useState(picture)
    

    return (
        <div>
            <div style={styleA} className="top">
                <h1>{title}</h1>
                <h3><strong>{body}</strong></h3>
            </div>
            <div style={styleB} className="row">
                <div className="col-md-4">
                    {
                        pic.map(pic => <Image key={pic.key} pic={pic}></Image>)
                    }
                </div>
                <div className="col-md-8">

                    {
                        comment.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PostDetail;