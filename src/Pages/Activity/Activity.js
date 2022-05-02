import React from 'react';
import { useNavigate } from 'react-router-dom';

const Activity = () => {
    const navigate = useNavigate()
    return (
        <div className='mt-3 flex flex-col mx-auto max-w-md'>
            <div className='p-4'>
                <h1 className='text-xl text-bold mb-2'>Note:</h1>
                <p className='text-lg'>You are only able to delete your own added items.To manage your added product :you should have first create an account and will have add some product.

                </p>
                <p className='text-lg'>Then go to My Items page and Delete and Update.</p>
            </div>
            <div className="ms-5 text-center">
                <button onClick={() => navigate('/myItems')} className="ms-3 p-2 bg-blue-700 text-white font-bold rounded">Your Items</button>
            </div>
        </div>
    );
};

export default Activity;