import Layout from "@/components/Layout";
import Head from "next/head";
import EffectFlipCard from "@/components/EffectFlipCard/EffectFlipCard";

export default function Funfacts() {
  return (
    <Layout>
      <Head>
        <title>Funfacts</title>
      </Head>
      <div>Turn the cards/ pictures around for some fun facts</div>
      <EffectFlipCard />
      <EffectFlipCard />
      <EffectFlipCard />
    </Layout>
  );
}
