import Head from "next/head";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";

export const siteTitle = "All About Cats";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="layout">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        {/*Bulma requires this*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="header">
        <NavBar />
      </header>
      <main className="mainLayoutContainer" id="Outlet">
        {children}
      </main>
      {!home && (
        <div className="backToHome">
          <Link className="has-text-white" href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  );
}
