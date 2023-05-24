import Layout from "@/components/Layout";
import Head from "next/head";
import { IntroductionElement } from "@/components/IntroductionElement/IntroductionElement";
import { introductionData } from "../../pageData/introductionData";

export default function Introduction() {
  return (
    <Layout>
      <Head>
        <title>Wer wir sind</title>
      </Head>
      <div className="text-container">
        <div className="title">Wer wir sind</div>
        <div className="subtitle">
          Wir sind Atlas und Maple. Zwei wilde Kater aus der schönen Hauptstadt.
          Hier ein paar Fakten über uns.
        </div>
      </div>
      <div className="non-text-container">
        <div className="columns is-multiline is-gapless is-centered is-vcentered is-mobile">
          {introductionData.map((el, index) => {
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
