import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip } from "swiper";
import image from "../../../public/20230103_155348.jpg";
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
            src={image}
            alt={"this is an image"}
            height={400}
            width={400}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-style has-text-centered">
            <div className="is-size-5-mobile is-size-4 backside-text">
              This is some funfact Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
