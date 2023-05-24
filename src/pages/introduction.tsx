import Layout from "@/components/Layout";
import Head from "next/head";
import { IntroductionElement } from "@/components/IntroductionElement/IntroductionElement";
import image from "../../public/20230103_155348.jpg";

const testData = new Array(6).fill({
  url: image,
  title: "test title is much longer",
  subtitle: "this is some text blablabla and even more text",
});

export default function Introduction() {
  return (
    <Layout>
      <Head>
        <title>Wer wir sind</title>
      </Head>
      <div className="text-container">
        <div className="title">This is some title</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          aliquid blanditiis deserunt dolore dolorem est expedita, fugiat,
          incidunt neque pariatur perferendis quaerat quasi quis veniam
          voluptatibus? Architecto blanditiis corporis exercitationem
          perferendis. Aliquam et iusto libero perspiciatis quos reiciendis
          repudiandae sunt? Consequuntur debitis dignissimos dolor doloremque
          eaque earum esse eveniet ex explicabo incidunt, iste laudantium maxime
          mollitia nesciunt nobis optio qui quo repudiandae rerum, vel voluptas
          voluptatibus.
        </div>
      </div>
      <div className="non-text-container">
        <div className="columns is-multiline is-gapless is-centered is-vcentered is-mobile">
          {testData.map((el, index) => {
            return (
              <div className="column is-narrow" key={index}>
                <IntroductionElement
                  url={el.url}
                  title={el.title}
                  subtitle={el.subtitle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
