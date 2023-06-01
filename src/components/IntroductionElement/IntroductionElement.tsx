import Image, {StaticImageData} from "next/image";

export const IntroductionElement = (props: {
  url: StaticImageData;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="introduction-element">
      <figure className="image is-1by1">
        <Image
          className="is-rounded introduction-image"
          src={props.url}
          alt={"this is some image"}
        />
      </figure>
      <hgroup className="has-text-centered">
        <h2 className="introduction-title">{props.title}</h2>
        <div className="subtitle-div">
          <span className="subtitle is-6">{props.subtitle}</span>
        </div>
      </hgroup>
    </div>
  );
};
