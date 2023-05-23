import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

const image1 =
  "https://upload.wikimedia.org/wikipedia/commons/e/e6/Forested_hills_in_Lysekil_in_fog_-_B%26W.jpg";
// ToDo change speed depending on breakpoint
const speed = 15;

export const MainPageParallax = () => {
  return (
    <ParallaxProvider>
      <div className="parallax">
        <ParallaxBanner
          layers={[
            { image: image1, speed: speed },
            {
              speed: -5,
              children: (
                <div className="title-position-over-picture">
                  <div className="title-over-picture">Hello World!</div>
                </div>
              ),
            },
          ]}
          className="banner-height"
        ></ParallaxBanner>
        <section className="text-container">
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
              speed: -10,
              children: (
                <div className="title-position-over-picture">
                  <div className="title-over-picture">Hello World!</div>
                </div>
              ),
            },
          ]}
          className="banner-height"
        ></ParallaxBanner>
        <section className="text-container">
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
