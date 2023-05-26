import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip } from "swiper";
import Image from "next/image";

export default function EffectFlipCard(props: {
  url: string;
  funfact: string;
}) {
  return (
    <div className="effect-flip-card">
      <Swiper
        effect={"flip"}
        grabCursor={true}
        loop={true}
        modules={[EffectFlip]}
      >
        <SwiperSlide>
          <Image
            src={props.url}
            alt={"this is an image"}
            height={400}
            width={400}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-style has-text-centered">
            <div className="is-size-6-mobile is-size-5-tablet is-size-4 backside-text">
              {props.funfact}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
