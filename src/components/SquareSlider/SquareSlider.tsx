// import of the swiper styles is in style.scss
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SquareSliderElement } from "./SquareSliderElement";

/** Component that renders SquareSliderElements depending on a data-array in a slider.
 * The slider has autoplay and pagination. */

export const SquareSlider = (props: {
  urlPrefix: string;
  numberOfImages: number;
}) => {
  const imgArray = new Array(props.numberOfImages).fill("");
  return (
    <div className="square-slider">
      <section className="section">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet yellow-bullet",
          }}
          slidesPerView={1}
          spaceBetween={40}
          // using Bulma breakpoints
          // https://bulma.io/documentation/overview/responsiveness/
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1408: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        >
          {imgArray.map((url, index) => {
            return (
              <SwiperSlide className="swiper-wrapper" key={index}>
                <SquareSliderElement
                  url={
                    `./Gallery/${props.urlPrefix}/${props.urlPrefix}_${
                      index + 1
                    }.jpg`
                  }
                  // title={el.title}
                  // subtitle={el.subtitle}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};
