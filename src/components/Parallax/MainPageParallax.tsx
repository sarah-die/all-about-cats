import { ParallaxBanner } from "react-scroll-parallax";

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

export const MainPageParallax = () => {
  return (
    <div className="parallax">
      <ParallaxBanner
        layers={[
          { image: image1, speed: 15 },
          {
            speed: -15,
            children: (
              <div className="title-position-over-picture">
                <div className="title-over-picture">Hello World!</div>
              </div>
            ),
          },
        ]}
        className="banner-height"
      ></ParallaxBanner>
      <section className="section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        inventore repudiandae. Consectetur dicta earum minima quaerat unde ut
        voluptatibus. Alias autem consectetur deleniti hic laudantium optio
        placeat quasi, quis sint?
      </section>
      <ParallaxBanner
        layers={[
          { image: image1, speed: 15 },
          {
            speed: -15,
            children: (
              <div className="title-position-over-picture">
                <div className="title-over-picture">Hello World!</div>
              </div>
            ),
          },
        ]}
        className="banner-height"
      ></ParallaxBanner>
      <section className="section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        inventore repudiandae. Consectetur dicta earum minima quaerat unde ut
        voluptatibus. Alias autem consectetur deleniti hic laudantium optio
        placeat quasi, quis sint?
      </section>
    </div>
  );
};
