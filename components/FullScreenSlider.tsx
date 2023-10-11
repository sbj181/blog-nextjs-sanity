// components/FullScreenSlider.tsx
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Import Swiper CSS
import styles from './FullScreenSlider.module.scss'

// Install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const FullScreenSlider: React.FC = () => {
  return (
    
        <Swiper
        className='cursor-pointer'
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ height: '70vh', width: '100%' }}
        >
        {/* Your slides */}
        <SwiperSlide className={`${styles['swiper-slide']} bg-red-500 flex items-center justify-center text-white text-4xl font-bold`}>
            <h1>Welcome</h1>
        </SwiperSlide>
        <SwiperSlide className={`${styles['swiper-slide']} bg-blue-500 flex items-center justify-center text-white text-4xl font-bold`}>
            <h1>To this</h1>
        </SwiperSlide>
        <SwiperSlide className={`${styles['swiper-slide']} bg-green-500 flex items-center justify-center text-white text-4xl font-bold`}>
            <h1>Slider</h1>
        </SwiperSlide>
        {/* ... (add more slides as needed) */}
        </Swiper>
    
  );
};

export default FullScreenSlider;
