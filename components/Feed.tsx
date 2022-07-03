/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";

export default function Feed() {
  return (
        <li class={tw`relative`}>
        <a href="#!" class={tw`flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded 
        hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out`}>Hackernews!</a>
        </li>
  );
}