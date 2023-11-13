import classNames from "classnames";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  city?: string;
  image?: string;
  className?: string | undefined;
  id?: string;
  route?: string;
  size?: "small" | "medium" | "circle";
  time?: string;
  venue?: string;
  date?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  city,
  image,
  className,
  route,
  id,
  size,
  venue,
  time,
  date,
}) => {
  const imgClass = classNames({
    "h-[12rem] w-[12rem] rounded-lg": size === "small",
    "h-[15.5rem] w-[15.5rem] rounded-lg": size === "medium",
    "h-[11rem] w-[11rem] rounded-full": size === "circle",
  });
  return (
    <Link to={`/${route}/${id}`}>
      <div className={``}>
        {image && <img className={imgClass} src={image} alt={title} />}
        <div className={`mt-1  font-raleway ${className}`}>
          <div className="font-bold text-white text-md">{title}</div>
          {city && (
            <p className="flex text-xs text-gray-500">
              <CiLocationOn />
              {city}
            </p>
          )}
          <p className="text-sm text-gray-500">{date}</p>
          <p className="text-sm text-gray-500">{time}</p>
          <p className="text-sm text-gray-500">{venue}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
