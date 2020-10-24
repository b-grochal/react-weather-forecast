import { renderIntoDocument } from 'react-dom/test-utils';
import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {

    return(
        <div className='loading-spinner-container'>
            <div className='loading-spinner-container__loading-spinner'></div>
        </div>
    )
}

export default LoadingSpinner;