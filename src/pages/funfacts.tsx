import Layout from "@/components/Layout";
import Head from "next/head";
import EffectFlipCard from "@/components/EffectFlipCard/EffectFlipCard";
import image from "../../public/20230103_155348.jpg";

const funfactsData = new Array(9).fill({
  url: image,
  funfact: "This is some funfact Lorem ipsum dolor sit amet, consectetur.",
});

export default function Funfacts() {
  return (
    <Layout>
      <Head>
        <title>Funfacts</title>
      </Head>
      <section className="section">
        Turn the cards/ pictures around for some fun facts
      </section>
      <div className="container">
        <div className="columns is-multiline is-gapless">
          {funfactsData.map((el, index) => {
            return (
              <div className="column" key={index}>
                <EffectFlipCard url={el.url} funfact={el.funfact} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
