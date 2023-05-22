import Layout from "@/components/Layout";
import Head from "next/head";
import { SquareSlider } from "@/components/SquareSlider/SquareSlider";

export default function Gallery() {
  return (
    <Layout>
      <Head>
        <title>Gallerie</title>
      </Head>
      <section className="section">
        <div className="container">
          <SquareSlider />
        </div>
      </section>
    </Layout>
  );
}
