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
      <div class={tw`flex border-b items-center text-sm py-2 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded`}>
        <span>FEEDS</span>
      </div>
      {folders.map((folder) => (
        <li class={tw`relative`}> 
          

          
 
          <a class={tw`flex items-center text-sm py-4 px-3 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap 
              rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer`}>
             <svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class={tw`w-3 h-3 mr-3`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            </svg>
            <span>{folder.name}</span>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" class={tw`w-3 h-3 ml-auto`}  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"></path>
            </svg>

          </a>
          <Feed selectedFolder={folder.name} />
        </li>))}
    </ul>
  );
}

