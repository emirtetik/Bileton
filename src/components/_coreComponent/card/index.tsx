import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  city?: string;
  image?: string;
  className?: string;
  id?: string; 
  route?: string; 
}

const Card: React.FC<CardProps> = ({ title, city, image, className,route,id }) => {
  return (
    <Link to={`/>${route}/${id}`}>
    <div className={``}>
      {image && (
          <img className={`object-cover w-full ${className}`} src={image} alt={title} />
      )}
      <div className="mt-1 text-left font-raleway">
        <div className="font-bold text-white text-md">{title}</div>
        {city && <p className="flex text-xs text-gray-500"><CiLocationOn/>{city}</p>}
      </div>
    </div>
    </Link>
  );
};

export default Card;
