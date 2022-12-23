import Head from "next/head";
import Image from "next/image";
import AboutUs from "../components/aboutus/AboutUs";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Pricing from "../components/pricing/Pricing";
import Service from "../components/service/Service";
import Team from "../components/team/Team";

export default function Home() {
  return (
    <>
      <Head>
        <title>trew</title>
        <meta name="description" content="trust" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <Header />
      <AboutUs />
      <Service />
      <Pricing />
      <Contact />
      <Team />
      {/* <Footer /> */}

    </>
  );
}
