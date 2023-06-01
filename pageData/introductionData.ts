import image1 from "./../public/Introduction/1.jpg";
import image2 from "./../public/Introduction/2.jpg";
import image3 from "./../public/Introduction/3.jpg";
import image4 from "./../public/Introduction/4.jpg";
import image5 from "./../public/Introduction/5.jpg";
import image6 from "./../public/Introduction/6.jpg";
import image7 from "./../public/Introduction/7.jpg";
import image8 from "./../public/Introduction/8.jpg";
import image9 from "./../public/Introduction/9.jpg";
import image10 from "./../public/Introduction/10.jpg";
import image11 from "./../public/Introduction/11.jpg";
import image12 from "./../public/Introduction/12.jpg";
import image13 from "./../public/Introduction/13.jpg";
import image14 from "./../public/Introduction/14.jpg";
import image15 from "./../public/Introduction/15.jpg";
import image16 from "./../public/Introduction/16.jpg";
import {StaticImageData} from "next/image";
export type Introduction = { url: StaticImageData; title: string; subtitle: string };
export const introductionData: Introduction[] = [
  {
    url: image1,
    title: "Atlas",
    subtitle: "Kater, der alles sehr genau erkundet und immer neugierig ist.",
  },
  {
    url: image2,
    title: "Maple",
    subtitle: "Kater, der dich wie süßer Ahornsirup umschmeichelt.",
  },
  { url: image3, title: "Geburtstag", subtitle: "13.03.2022" },
  { url: image4, title: "Alter", subtitle: "1 Jahr und 2 Monate" },
  { url: image5, title: "Wohnort", subtitle: "Berlin" },
  { url: image6, title: "Geburtsort", subtitle: "Röbel an der Müritz" },
  {
    url: image7,
    title: "Lieblingsplatz",
    subtitle:
      "Jeder Sonnenplatz, der sich ergibt. Am liebsten aber am Fenster.",
  },
  {
    url: image8,
    title: "Job",
    subtitle: "Ehrenamtliche Tätigkeit als Pappkarton-Recycler",
  },
  {
    url: image9,
    title: "Das begeistert uns",
    subtitle: "Drucker, Hagelkörner und jede Art von Insekt",
  },
  {
    url: image10,
    title: "Bestes Spielzeug",
    subtitle: "Pappkartons, Aluminiumkugeln, Schnüre und Essstäbchen.",
  },
  {
    url: image11,
    title: "Anzahl Geschwister im Wurf",
    subtitle: "Drei",
  },
  {
    url: image12,
    title: "Spezial- fähigkeit",
    subtitle: "Atlas: Kringelschwanz, Maple: Hochsprung",
  },
  {
    url: image13,
    title: "Mama",
    subtitle: "Kandis",
  },
  {
    url: image14,
    title: "Papa",
    subtitle: "Sesam",
  },
  {
    url: image15,
    title: "Liebstes Möchte-gern-aber-darf-nicht-Essen",
    subtitle: "Käse und Kokosmilch",
  },
  {
    url: image16,
    title: "Das macht uns Angst",
    subtitle: "Der Start-Sound vom MacBook",
  },
];
