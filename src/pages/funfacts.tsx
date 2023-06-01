import Layout from "@/components/Layout";
import Head from "next/head";
import EffectFlipCard from "@/components/EffectFlipCard/EffectFlipCard";
import { funfacts } from "../../pageData/funfactsData";

export default function Funfacts() {
  return (
    <Layout>
      <Head>
        <title>Funfacts</title>
      </Head>
      <div className="text-container">
        <div className="title">Funfacts über Katzen</div>
        <div>
          Dreh die Karten / Bilder um, um ein paar Funfacts über Katzen kennen
          zu lernen.
        </div>
      </div>
      <div className="non-text-container">
        <div className="columns is-multiline is-gapless is-vcentered is-mobile">
          {funfacts.map((el, index) => {
            return (
              <div className="column" key={index}>
                <EffectFlipCard
                  url={`./Funfacts/${index + 1}.jpg`}
                  funfact={el}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
