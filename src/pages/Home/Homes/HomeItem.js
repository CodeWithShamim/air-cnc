import React from "react";
import { FaStar } from "react-icons/fa";

const HomeItem = ({ home }) => {
  const { img, name, title, price, rating } = home;
  return (
    <div className="text-left w-full">
      <img className="w-100 rounded object-cover" src={img} alt={name} />
      <p className="text-sm font-semibold text-primary pt-2">{title}</p>
      <h2 className="text-lg font-bold">{name}</h2>
      <p>${price} per person</p>
      <p className="flex text-secondary text-xs items-center justify-start">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <span className="ml-2 text-gray-500"> {rating}</span>
      </p>
    </div>
  );
};

export default HomeItem;
