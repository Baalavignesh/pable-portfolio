"use client";

import { Carousel } from "@/registry/aliimam/components/carousel";

const screens = [
  { src: "/projects/bytime/Screen 1.png" },
  { src: "/projects/bytime/Screen 2.png" },
  { src: "/projects/bytime/Screen 3.png" },
  { src: "/projects/bytime/Screen 4.png" },
  { src: "/projects/bytime/Screen 5.png" },
  { src: "/projects/bytime/Screen 6.png" },
  { src: "/projects/bytime/Screen 7.png" },
  { src: "/projects/bytime/Screen 8.png" },
];

const ByTimeCarousel: React.FC = () => {
  const slides = screens.map((s) => (
    <img
      key={s.src}
      src={s.src}
      alt="ByTime screenshot"
      className="w-full h-[520px] rounded-2xl object-contain object-top"
    />
  ));

  return (
    <Carousel
      slides={slides}
      options={{ align: "center", loop: true }}
      slideClassName="basis-[85%] shrink-0 sm:basis-[48%] lg:basis-[32%] pl-3 transform-gpu min-w-0"
      autoplayDelay={3500}
      showDots
      showProgress={false}
      showPlay={false}
      showArrows={false}
      showCounter={false}
      keyboardNavigation
    />
  );
};

export default ByTimeCarousel;
