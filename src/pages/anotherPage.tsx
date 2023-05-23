import Layout from "../components/Layout";
import Head from "next/head";
import { MainPageParallax } from "@/components/Parallax/MainPageParallax";

export default function AnotherPage() {
  return (
    <Layout>
      <Head>
        <title>Another Page</title>
      </Head>
      <MainPageParallax />
    </Layout>
  );
}
