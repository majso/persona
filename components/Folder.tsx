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
      <div class={tw`flex border-b items-center text-sm py-2 px-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap`}>
        <span>FEEDS</span>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" class={tw`w-3 h-3 ml-auto`}  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
      </div>
      {folders.map((folder) => (
        <li class={tw`relative`}> 
        
          <a class={tw`flex items-center text-sm py-4 px-3 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap 
              rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer`}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" class={tw`w-3 h-3 mr-1`}  role="img"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/></svg>
              <span>{folder.name}</span>
          </a>
          <Feed selectedFolder={folder.name} />
        </li>))}
    </ul>
  );
}

