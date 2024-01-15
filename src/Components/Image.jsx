import React from 'react'
import { Link } from 'react-router-dom';

function Image({ id, url, title }) {
    return (
        <Link to={`/detailPage/${id}`}>
            <div key={id}>
                <img src={url} alt={title} className='rounded-3xl' />
            </div>
        </Link>
    )
}

export default Image;