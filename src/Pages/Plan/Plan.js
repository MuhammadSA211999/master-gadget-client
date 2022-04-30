import React from 'react';
import { Link } from 'react-router-dom';

const Plan = () => {
    return (
        <div className='my-5 mx-6'>
            <h4 className='text-3xl text-center font-bold text-green-900'>PLEASE GET A PLAN</h4>
            <div className='plan my-4'>
                <Link to='/' className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">One Year Premium For $500</h5>
                    <p className="text-2xl font-semibold text-black dark:text-gray-400">1 year package facilities</p>
                    <p className='text-xl font-medium text-blue-900'>Five percent discount on purcase</p>
                    <p className='text-xl font-medium text-blue-900'>12 parcent off on 1555+</p>
                    <p className='text-xl font-medium text-blue-900'>Weekend suprising offer</p>
                </Link>
                <Link to='/' className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Six Month Premium For $400</h5>
                    <p className="text-2xl font-semibold text-black dark:text-gray-400">6 month package facilities</p>
                    <p className='text-xl font-medium text-blue-900'>Two percent discount on purcase</p>
                    <p className='text-xl font-medium text-blue-900'>7 parcent off on 1555+</p>
                    <p className='text-xl font-medium text-blue-900'>montly surpris offer!</p>
                </Link>
                <Link to='/' className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">One Month Premium For $300</h5>
                    <p className="text-2xl font-semibold text-black dark:text-gray-400">One month package facilities</p>
                    <p className='text-xl font-medium text-blue-900'>Off on every ten purchase</p>
                    <p className='text-xl font-medium text-blue-900'>3 parcent off on 2000+</p>
                    <p className='text-xl font-medium text-blue-900'>Off day surpris offer!</p>
                </Link>
            </div>

        </div >
    );
};

export default Plan;