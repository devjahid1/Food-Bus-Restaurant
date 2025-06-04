import React from 'react';

const FastFoods = ({fastFoodItem}) => {
    const { img, name, totalPiece, price } = fastFoodItem;

    return (
        <div className=" w-full rounded-lg border p-4">
            <img
                src={img}
                alt={name}
                className=" w-full h-[132px] object-cover rounded-lg mb-3"
            />
            <h2 className="text-[18px] font-pacifico mb-1">{name}</h2>
            <p className="text-[14px] text-gray-600 mb-1">{totalPiece}</p>
            <p className="text-[18px] text-[#BF0A13] font-bold">{price} <span className='text-black'>৳</span></p>
        </div>
    );
};

export default FastFoods;