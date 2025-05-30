import React, { useState } from 'react';

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

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [showAll, setShowAll] = useState(false);

    const displayedImages = showAll ? images : images.slice(0, 6);

    return (
        <div className='mb-28'>
            <div className='text-[16px] text-center pt-20 mb-10'>
                <h2>Gallery</h2>
                <h3 className='text-[20px] lg:text-[42px] font-pacifico'>
                    A Glimpse Into the <span className='text-red-500'>Experience</span>
                </h3>
            </div>


            <div className="w-3/4 mx-auto columns-1 sm:columns-2 lg:columns-4 gap-4 p-6 space-y-4">
                {displayedImages.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`gallery-${index}`}
                        className="w-full mb-4 rounded-lg shadow-md break-inside-avoid cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => {
                            setCurrentImage(src);
                            setLightboxOpen(true);
                        }}
                    />
                ))}
            </div>


            <div className="text-center mt-6">
                <button
                    className="underline font-pacifico text-blue-600 hover:text-red-500 transition-colors duration-300"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? 'See Less' : 'See More'}
                </button>
            </div>


            {lightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="relative max-w-[95vw] max-h-[95vh]">
                        <button
                            onClick={() => setLightboxOpen(false)}
                            className="absolute top-2 right-2 text-white text-4xl font-bold z-10"
                        >
                            &times;
                        </button>
                        <img
                            src={currentImage}
                            alt="Zoomed"
                            className="w-full h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GallaryGrid;
