import React from 'react';
import { Link } from 'react-router-dom';

const Activity = () => {
    return (
        <div>
            <h1>your activity</h1>
            <Link to='/addactivity'>Add activity</Link>
        </div>
    );
};

export default Activity;