import React from 'react';
import './LoadMask.css';

export default function LoadMask ({loading}) {
    return (
        <>
        {loading && (
            <div className='load-mask'>
                <div className='spinner'>

                </div>
            </div>
        )}
        </>
    )
}