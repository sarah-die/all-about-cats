import Layout from "../components/Layout";
import Head from "next/head";
import { MainPageParallax } from "@/components/Parallax/MainPageParallax";
import { ParallaxProvider } from "react-scroll-parallax";

export default function AnotherPage() {
  return (
    <ParallaxProvider>
      <Layout>
        <Head>
          <title>Another Page</title>
        </Head>
        <MainPageParallax />
      </Layout>
    </ParallaxProvider>
  );
}
