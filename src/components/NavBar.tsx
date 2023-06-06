import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/** responsible navbar that changes appearance depending on the window size */

export const NavBar = () => {
  // to open and close menu in mobile version
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <nav
      className="navbar has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://de.wikipedia.org/wiki/Katzen">
          <Image src="/Introduction/1.jpg" alt={"Picture of a cat"} width="30" height="30"></Image>
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
          <Link className="navbar-item" href={"/"}>
            Home
          </Link>
          <Link className="navbar-item" href={"/introduction"}>
            Wer wir sind
          </Link>
          <Link className="navbar-item" href={"/funfacts"}>
            Funfacts
          </Link>
          {/*<Link className="navbar-item" href={"/knowledge"}>*/}
          {/*  Trivia/ Wissenswertes*/}
          {/*</Link>*/}
          <Link className="navbar-item" href={"/gallery"}>
            Galerie
          </Link>
        </div>
      </div>
    </nav>
  );
};
