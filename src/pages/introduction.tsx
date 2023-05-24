import Layout from "@/components/Layout";
import Head from "next/head";
import { IntroductionElement } from "@/components/IntroductionElement/IntroductionElement";

const testData = new Array(6).fill({
  url: "",
  title: "test title",
  subtitle: "this is some text blablabla",
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
        {testData.map((el, index) => {
          return (
            <div key={index}>
              <IntroductionElement
                url={el.url}
                title={el.title}
                subtitle={el.subtitle}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
