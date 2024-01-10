import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, SwiperSlideProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Swiper.scss';
import { useSwiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

interface SwiperProps extends SwiperSlideProps {
  list: any[];
  height?: number;
  width?: number;
  children: (data: any, index:number) => React.ReactNode;
  withoutPagination?: boolean;
  onSlide?: (activeIndex: number) => void;
  activeIndex?: number;
  className?: string;
  autoplay?: boolean;
}

function MySwiper(props: SwiperProps) {
  const swiper = useSwiper();
  
  const slideTo = (index) => {
    if (swiper) {
      if (
        (swiper.realIndex !== 0 && swiper.activeIndex !== props.list.length)
        && (swiper.realIndex !== props.list.length - 1)
      ) {
        swiper.slideToLoop(index);
      } else if (swiper.realIndex !== index) {
        swiper.slideToLoop(index);
      }
    }
  };

  useEffect(() => {
    if (props.activeIndex !== undefined) {
      slideTo(props.activeIndex);
    }
  }, [swiper, props.activeIndex]);

  if (!props.list.length) return null;

  const modules = props.withoutPagination ? [] : [Pagination];

  if (props.autoplay) {
    modules.push(Autoplay);
  }

  return (
    <Swiper
      initialSlide={props.activeIndex}
      pagination={{
        dynamicBullets: !props.withoutPagination,
      }}
      className="swiper-flex"
      autoHeight={props.autoHeight ?? true}
      loop
      modules={modules}
      style={{
        height: props.height,
        width: props.width || '100%',
      }}
      onSlideChange={(swiper) => {
        const { realIndex } = swiper;
        if (props.onSlide) {
          props.onSlide(realIndex);
        }
      }}
      autoplay={props.autoplay || {}}
    >
      {props.list.map((data, index) => {
        const res = props.children(data, index);
        if (!res) return null;
        return <SwiperSlide key={index}>{res}</SwiperSlide>;
      })}
    </Swiper>

  );
}

export default MySwiper;
