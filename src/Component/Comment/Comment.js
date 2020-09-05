import React from 'react';

const Comment = (props) => {
    const {name,email,body} = props.comment;

    const style={
        marginTop: '10px',
    }

    return (
        <div>
            <div style={style} className="row">
                <div className="col-md-8">
                    <h5><b>Comment:-</b> {body} </h5>
                </div>
                <div className="col-md-4">
                    <h5>Name:- {name} </h5>
                    <p>Email:- {email} </p>

                </div>
            </div>
        </div>
    );
};

export default Comment;