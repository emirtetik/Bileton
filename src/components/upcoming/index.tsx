import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
const UpComing = () => {
    const cards = ['Kart 1', 'Kart 2', 'Kart 3', 'Kart 4', 'Kart 5', 'Kart 6'];

    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className=''>{card}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  

export default UpComing