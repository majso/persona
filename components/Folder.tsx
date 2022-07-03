/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";

import Feed from "../components/Feed.tsx";
import Expand from "../islands/Expand.tsx";

export default function Folder() {
  let expand = false;
  return (
        <li class={tw`relative`}>
        <a onClick={() => expand = true } class={tw`flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap 
        rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer`}>
        <Expand /><span>Tech News</span>
        </a>
        <ul class={tw`relative accordion-collapse collapse`}>
            <Feed />
        </ul>
      </li>
  );
}