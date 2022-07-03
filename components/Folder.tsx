/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";

import Feed from "../components/Feed.tsx";

export default function Folder() {
  const folders = [
    {
      name: "Tech News"
    },
    {
      name: "Blogs"
    },
    {
      name: "Science"
    },
  ];
  return (
    <ul class={tw`relative px-1`}>
      {folders.map((folder) => (
        <li class={tw`relative`}> 
          <a class={tw`flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap 
              rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer`}>
            {folder.name}
          </a>
          <Feed selectedFolder={folder.name} />
        </li>))}
    </ul>
  );
}

