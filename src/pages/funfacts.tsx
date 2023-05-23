import Layout from "@/components/Layout";
import Head from "next/head";
import EffectFlipCard from "@/components/EffectFlipCard/EffectFlipCard";
import image from "../../public/20230103_155348.jpg";

const funfactsData = new Array(12).fill({
  url: image,
  funfact: "This is some funfact Lorem ipsum dolor sit amet, consectetur.",
});

export default function Funfacts() {
  return (
    <Layout>
      <Head>
        <title>Funfacts</title>
      </Head>
      <div className="text-container">
        <div className="title">This is some title</div>
        <div>
          <strong>Turn the cards/ pictures around for some fun facts. </strong>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
          aliquam asperiores aut autem dolor dolorem eaque eum labore laudantium
          minima nisi non nostrum, officiis quam qui suscipit totam voluptates.
          Asperiores aspernatur autem delectus dolore, eius eligendi enim
          explicabo facilis illo impedit libero modi necessitatibus numquam
          perspiciatis praesentium quae quaerat quidem quos recusandae rem.
          Accusantium blanditiis eligendi magni qui repellat? Excepturi magni
          minus odio officia quam?
        </div>
      </div>
      <div className="non-text-container">
        <div className="columns is-multiline is-gapless is-vcentered is-mobile">
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
