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
      <SquareSlider urlPrefix={"month1to6"} numberOfImages={26}/>
      <SquareSlider urlPrefix={"month6to12"} numberOfImages={24}/>
      <SquareSlider urlPrefix={"month12to18"} numberOfImages={7}/>
    </Layout>
  );
}
