import React from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    
    const { data: images, loading } = useFetchGifs( category );

    return (
        <div className="animate__animated animate__flipInX">
            <h3>{ category }</h3>
            <div className="cards-grid">
                { loading && <p>...Loading</p>}
                {
                    images.map( img => 
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    )
                }
            </div>
        </div>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}