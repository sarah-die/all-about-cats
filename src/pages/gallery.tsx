import Layout from "@/components/Layout";
import Head from "next/head";
import { SquareSlider } from "@/components/SquareSlider/SquareSlider";

export default function Gallery() {
  return (
    <Layout>
      <Head>
        <title>Gallerie</title>
      </Head>
      <div className="text-container">
        <div className="title">Gallerie</div>
        <div className="subtitle">
          Hier ein paar Foto aus den letzten Monaten. Viel Spaß beim Anschauen!
        </div>
      </div>
      <div className="text-container">
        <div className="subtitle">
          Unsere ersten sechs Monate. Von März 2022 bis September 2022.
        </div>
      </div>
      <SquareSlider urlPrefix={"month1to6"} numberOfImages={26} />
      <div className="text-container">
        <div className="subtitle">
          Unser zweites halbes Jahr. Von September 2022 bis März 2023.
        </div>
      </div>
      <SquareSlider urlPrefix={"month6to12"} numberOfImages={24} />
      <div className="text-container">
        <div className="subtitle">
          Endlich erwachsen - mit 1 Jahr geht's rund! März 2023 bis September
          2023.
        </div>
      </div>
      <SquareSlider urlPrefix={"month12to18"} numberOfImages={7} />
    </Layout>
  );
}
