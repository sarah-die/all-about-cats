import Layout from "../components/Layout";
import Head from "next/head";
import { MainPageParallax } from "@/components/Parallax/MainPageParallax";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>All About Cats</title>
      </Head>
      <main id="home">
        <MainPageParallax />
      </main>
    </Layout>
  );
}
