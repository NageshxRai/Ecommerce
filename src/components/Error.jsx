import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Error.css"

const Error = () => {
    const navigate = useNavigate(); 

    const handleGoHome = () => {
        navigate('/'); 
    };

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={handleGoHome}>Go to Home</button> 
        </div>
    );
};

export default Error;
