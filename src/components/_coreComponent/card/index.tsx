import classNames from "classnames";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import {LiaCitySolid} from "react-icons/lia"

interface ImageProps {
  contentType: string;
  data: {
    data: number[];
    type: string;
  };
  filename: string;
}

interface CardProps {
  title?: string;
  city?: string;
  image?: ImageProps | undefined | string;
  alt?: string;
  className?: string | undefined;
  route?: string;
  size?: "small" | "medium" | "circle" | "large";
  time?: string;
  venue?: string;
  date?: string;
  description?: string;
  onClick?:React.MouseEventHandler<HTMLDivElement> | undefined
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
  onClick,
}) => {
  const imgClass = classNames({
    "h-[12rem] w-[12rem] rounded-lg": size === "small",
    "h-[18rem] w-[18rem] rounded-lg": size === "medium",
    "md:h-[28rem] lg:h-[33rem] sm:h-[26rem] h-[25rem] rounded-lg w-11/12 mx-auto":
      size === "large",
    "h-[11rem] w-[11rem] rounded-full": size === "circle",
  });

  let imgSrc;
  if (typeof image === 'string') {
    imgSrc = image;
  } else if (image && image.data && image.data.data) {
    let binary = '';
    const bytes = new Uint8Array(image.data.data);
    bytes.forEach((byte) => binary += String.fromCharCode(byte));
    imgSrc = `data:image/jpeg;base64,${btoa(binary)}`;
  }
  

  return (
    <Link to={route}>
      <div className={`${className}`} onClick={onClick}>
      {image && <img className={imgClass} src={imgSrc} alt={alt} />}
        <div className={`mt-1 flex flex-col   font-raleway`}>
          <h1 className="font-bold text-md">{title}</h1>
          <p className="text-sm text-gray-500">{description}</p>
          {city && (
            <p className="flex items-center text-xs text-gray-500">
              <LiaCitySolid />
              {city}
            </p>
          )}
          <p className="text-sm text-gray-500">{date}</p>
          <p className="text-sm text-gray-500">{time}</p>
          {venue && (
            <p className="flex items-center text-sm text-gray-500">
              <CiLocationOn />
              {venue}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
