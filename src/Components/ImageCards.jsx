import React, { useState, useEffect } from 'react';
import Image from './Image';
import fetchData from '../utils/fetchdata';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

function ImageCard({ heading, id, setPhoto }) {
    const [data, setData] = useState([]);


    const [offset, setOffset] = useState(0);
    const handleNextClick = () => {
        setOffset(offset + 20);
    };

    const handlePreviousClick = () => {
        if (offset >= 20) {
            setOffset(offset - 20);
        }
    };

    useEffect(() => {
        fetchData(setData, offset);
    }, [offset]);

    return (
        <>
            <h1 className='text-center my-6 mt-10 sm:my-14 text-3xl md:text-5xl'>{heading}</h1>
            <div className="grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {data.photos && data.photos.map(photo => (
                    <Image key={photo.id} id={photo.id} url={photo.url} title={photo.title} author={photo.author} location={photo.location} category={photo.category} />
                ))}
            </div>

            <div className="fixed bottom-80 top-96 flex justify-between right-1  left-1">
                <button
                    onClick={handlePreviousClick}
                    disabled={offset === 0}
                    className="px-4 text-3xl hover:bg-fuchsia-300 hover:text-2xl rounded-e-3xl mr-2"
                >
                    <AiOutlineDoubleLeft />
                </button>
                <button
                    onClick={handleNextClick}
                    disabled={!data.photos || data.photos.length < 20}
                    className="px-4 text-3xl hover:bg-fuchsia-300 hover:text-2xl rounded-s-3xl"
                >
                    <AiOutlineDoubleRight />
                </button>
            </div>
        </>
    );
}

export default ImageCard;