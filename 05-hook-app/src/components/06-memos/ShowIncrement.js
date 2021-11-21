import React from 'react';
import PropTypes from 'prop-types';


export const ShowIncrement = React.memo(({ increment }) => {
    
    console.log('Me llame');

    return (
        <button
            className='btn btn-success'
            onClick={ increment }
        >
            +1
        </button>
    )
})

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
}
