import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

/** This component consists of an image and an overlay consisting of a title and a subtitle.
 * The subtitle is only visible when hovering. */

export const SquareSliderElement = (props: {
  url: string,
  // title: string,
  // subtitle: string
}) => {
  // ToDo optional: use framer motion to get an animation instead of hiding the subtitle
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div
      onMouseOver={() => setIsHidden(false)}
      onMouseLeave={() => setIsHidden(true)}
    >
      <figure className="image is-square">
        <Image
          className="img-style"
          src={props.url}
          alt="title"
          width="400"
          height="400"
          // ToDo optional: loading spinner (e.g) when slow connection
        />
        {/*<div className="has-text-left is-text-over-picture">*/}
        {/*  <div className="title is-4 px-5">{title}</div>*/}
        {/*  <div*/}
        {/*    className={clsx(*/}
        {/*      "subtitle",*/}
        {/*      "is-6",*/}
        {/*      "px-5",*/}
        {/*      isHidden && "is-hidden"*/}
        {/*    )}*/}
        {/*  >*/}
        {/*    {subtitle}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </figure>
    </div>
  );
};
