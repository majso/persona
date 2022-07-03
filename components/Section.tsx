/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";

import Folder from "../components/Folder.tsx";

export default function Section() {
  return (
    <div class={tw`w-60 h-full shadow-md bg-white absolute`} id="sidenavSecExample">
    <div class={tw`relative`}>
      <a class={tw`flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded`}>
        <span>FEEDS</span>
      </a>
    </div>

    <ul class={tw`relative px-1`}>
    <Folder />
    </ul>

    </div>

  );
}