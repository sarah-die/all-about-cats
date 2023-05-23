import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

export const MainPageParallax = () => {
  return (
    <ParallaxProvider>
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
          placeat quasi, quis sint? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Alias aliquam architecto asperiores beatae commodi
          cumque distinctio dolorum eum in maiores perferendis perspiciatis
          porro quam quidem, quisquam quos veniam vero voluptatum! Aut, eaque,
          eum. Aliquid beatae ipsum perferendis ut? Accusantium aliquid,
          aspernatur beatae doloremque fugiat, illo ipsum laudantium libero
          maiores minima nisi perferendis perspiciatis praesentium quos rem,
          repellendus tempora unde voluptate voluptatem voluptates. Aliquid
          architecto dolor nihil?
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
          placeat quasi, quis sint? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusantium adipisci aliquam architecto beatae,
          eligendi facere harum ipsa possimus quaerat, quis voluptate
          voluptates? Aspernatur beatae blanditiis consequuntur cum debitis
          deleniti deserunt dignissimos doloremque doloribus ea earum eligendi
          enim facilis, illum incidunt ipsum iusto necessitatibus nihil officiis
          pariatur, porro praesentium, quasi quibusdam quo rem reprehenderit
          sapiente sunt suscipit vel vero. Ab accusamus accusantium architecto
          doloribus eius excepturi expedita impedit ipsam iure libero nihil
          nisi, non, quos recusandae similique sit unde! Accusantium adipisci
          assumenda atque debitis, dolorum, eligendi eum ex, explicabo fuga hic
          labore minima non odit pariatur sed sint veritatis vitae?
        </section>
      </div>
    </ParallaxProvider>
  );
};
