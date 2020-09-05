import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero = () => {
    const style={
        color: 'white',
    }
    return (
        <div>
            <Jumbotron>
                    
                    <h1>Welcome</h1>
                    <p>Enjoy all blog, fun, and interactive learning process while becoming a Super Hero</p>
                    <Button variant="danger"><Link style={style} to="/blog">All Blog</Link> </Button>
                
            </Jumbotron>
        </div>
    );
};

export default Hero;