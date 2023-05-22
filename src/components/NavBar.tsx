import { useState } from "react";
import Image from "next/image";
import image from "../../public/20221017_1545062.jpg";

/** responsible navbar that changes appearance depending on the window size */

export const NavBar = () => {
  // to open and close menu in mobile version
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    // set is-white to change appearance of links and texts
    <nav
      className="navbar has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://de.wikipedia.org/wiki/Katzen">
          <Image src={image} alt={"Picture of a cat"} width="30"></Image>
        </a>

        <a
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          onClick={() => {
            setIsActive(!isActive);
          }}
          id="burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navBar-menu"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className="navbar-end">
          <a className="navbar-item" href={"/"}>
            Home
          </a>
          <a className="navbar-item" href={"/introduction"}>
            Wer wir sind
          </a>
          <a className="navbar-item" href={"/funfacts"}>
            Funfacts über Katzen
          </a>
          <a className="navbar-item" href={"/knowledge"}>
            Trivia/ Wissenswertes
          </a>
          <a className="navbar-item" href={"/gallery"}>
            Galerie
          </a>
        </div>
      </div>
    </nav>
  );
};
