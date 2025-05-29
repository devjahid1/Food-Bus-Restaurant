import React from 'react';

const GallaryGrid = () => {
    const images = [
        '/src/assets/Rectangle 19.png',
        '/src/assets/Rectangle 23.png',
        '/src/assets/Rectangle 27.png',
        '/src/assets/Rectangle 20.png',
        '/src/assets/Rectangle 24.png',
        '/src/assets/Rectangle 28.png',
        '/src/assets/Rectangle 21.png',
        '/src/assets/Rectangle 25.png',
        '/src/assets/Rectangle 29.png',
        '/src/assets/Rectangle 22.png',
        '/src/assets/Rectangle 26.png',
        '/src/assets/Rectangle 30.png',
    ];

    return (
        <div className='mb-28'>
                    <div className='text-[16px] text-center pt-20 mb-10'>
                <h2 className=''>Gallery</h2>
            <h3 className='text-[20px] lg:text-[30px] font-pacifico'>A Glimpse Into the  <span className='text-red-500'>Experience</span></h3>
            </div>

        <div className=" w-3/4 mx-auto columns-1 sm:columns-2 lg:columns-4 gap-4 p-6 space-y-4">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`gallery-${index}`}
                    className="w-full mb-4 rounded-lg shadow-md break-inside-avoid"
                />
            ))}
        </div>
        <div>
            <h1 className='text-center underline font-pacifico'>See More</h1>
        </div>
        </div>
    );
};

export default GallaryGrid;
