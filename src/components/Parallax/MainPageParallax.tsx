import {ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

export const MainPageParallax = () => {
  return (
    <div className="parallax">
      <div style={{ margin: 300 }}>Hello</div>
      <ParallaxBanner
        // layers={[{ image: image4, speed: 15 }]}
        style={{ height: 400 }}
      >
          <ParallaxBannerLayer image={image3} speed={-20}/>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1>Hello World!</h1>
        </div>
      </ParallaxBanner>
      <div style={{ margin: 300 }}>Bye</div>
    </div>
  );
};
