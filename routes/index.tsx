/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";

import NavigationBar from "../components/NavigationBar.tsx";
import Sidebar from "../components/Sidebar.tsx";

const TITLE = "persona - The next-gen RSS reader";
const DESCRIPTION =
  "Lightweight RSS reader";

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
      </Head>
      <div class={tw`flex flex-col min-h-screen`}>
        <div class={tw`flex-1`}>
          <NavigationBar active="/"  />
          <Sidebar />
        </div>
      </div>
    </>
  );
}
