import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Blog = () => {
    const quantity = 20
    const [number, setNumber] = useState(quantity)
    if (quantity > number) {
        toast.success('delever successful', { id: 'test' })
    }

    return (
        <div>
            <Toaster></Toaster>
            <div>
                <p>Personal info {number}</p>
            </div>
            <div>
                <p>questions answear</p>
                <button onClick={() => setNumber(number - 1)}>-</button>
            </div>
        </div>
    );
};

export default Blog;