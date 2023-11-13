import classNames from "classnames";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

interface CardProps {
  title?: string;
  city?: string;
  image?: string;
  alt?: string;
  className?: string | undefined;
  route?: string;
  size?: "small" | "medium" | "circle" | "large" ;
  time?: string;
  venue?: string;
  date?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  city,
  image,
  alt,
  className,
  route = "",
  size,
  venue,
  time,
  date,
  description,
}) => {
  const imgClass = classNames({
    "h-[12rem] w-[12rem] rounded-lg": size === "small",
    "h-[18rem] w-[18rem] rounded-lg": size === "medium",
    "md:h-[28rem] lg:h-[33rem] sm:h-[26rem] h-[25rem] rounded-lg w-11/12 mx-auto":
      size === "large",
    "h-[11rem] w-[11rem] rounded-full": size === "circle",
  });
  return (
    <Link to={route}>
      <div className={`${className}`}>
        {image && <img className={imgClass} src={image} alt={alt} />}
        <div className={`mt-1  font-raleway`}>
          <div className="font-bold text-white text-md">{title}</div>
          <p className="text-sm text-gray-500">{description}</p>
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
