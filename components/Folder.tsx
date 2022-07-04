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
    <ul class={tw`relative`}>
      <div class={tw`flex items-center text-sm py-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>        
        <span>FEEDS</span>
        <a class={tw`ml-auto hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer rounded`} href="/folder" title="Add Folder">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
        </a>
      </div>
      {folders.map((folder) => (
        <li class={tw`relative min-w-[10vw]`}> 
          <a class={tw`flex items-center text-sm py-2 h-12 overflow-hidden text-gray-700 hover:bg-blue-50 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap  cursor-pointer`}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" class={tw`w-3 h-3 mr-1`}  role="img"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/></svg>
          <span>{folder.name}</span>
          </a>
          <Feed selectedFolder={folder.name} />
        </li>))}
    </ul>
  );
}

