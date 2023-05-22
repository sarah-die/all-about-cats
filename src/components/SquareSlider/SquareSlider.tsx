// import of the swiper styles is in style.scss
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SquareSliderElement } from "./SquareSliderElement";
import image from "../../../public/20230103_155348.jpg";

/** Component that renders SquareSliderElements depending on a data-array in a slider.
 * The slider has autoplay and pagination. */

const data = new Array(9).fill({
  image: { url: image },
  title: "test title",
  subtitle:
    "testTitle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos facere ipsa minima quam ut vitae!",
});

export const SquareSlider = () =>
  // { data }
  {
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
            {data.map((el, index) => {
              return (
                <SwiperSlide className="swiper-wrapper" key={index}>
                  <SquareSliderElement
                    url={el.image.url}
                    title={el.title}
                    subtitle={el.subtitle}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </div>
    );
  };
