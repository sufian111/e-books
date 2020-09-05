import React from 'react';

const Image = (props) => {
    const {img}= props.pic;

    const style ={
        marginTop:"15px"
    }
    return (
        <div style={style}>
            <img src={img} alt=""/>
        </div>
    );
};

export default Image;