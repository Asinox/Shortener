import React from 'react';

const Result = (props) => {
    
    return (
        

        <div className='row'>
            <div className='col'>
                {props.children}
            </div>
        </div>

    )
}
    

export default Result;