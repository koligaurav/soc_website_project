import React from 'react';

function Cards({ item }) {
  return (
    <div className="card bg-base-100 w-92 shadow-xl my-3 p-3 hover:scale-105 duration-200">
      <figure>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary ml-2">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions flex justify-between mt-4">
          <div className="badge badge-outline">${item.price}</div>
          <button className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white  duration-200">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
