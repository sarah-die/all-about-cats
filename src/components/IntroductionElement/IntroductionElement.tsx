import Image from "next/image";

export const IntroductionElement = (props: {
  url: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="introduction-element">
      <figure className="image is-1by1">
        <Image
          className="is-rounded"
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
