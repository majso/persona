/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";

export default function Feed(props: { selectedFolder: string }) {
const feeds = [
    {
        name: "Hackernews",
        folder: "Tech News",
        url: "www.test.dsd"
    },
    {
        name: "Techweb",
        folder: "Tech News",
        url: "www.test.dsd"
    },
    {
        name: "Techweb",
        folder: "Tech News",
        url: "www.test.dsd"
    },
    {
        name: "Techweb",
        folder: "Tech News",
        url: "www.test.dsd"
    },
    {
        name: "Sciencenews",
        folder: "Science",
        url: "www.test.dsd"
    },
    {
        name: "Sciencenews",
        folder: "Science",
        url: "www.test.dsd"
    },
    {
        name: "Sciencenews",
        folder: "Science",
        url: "www.test.dsd"
    },
    {
        name: "Sciencenews",
        folder: "Science",
        url: "www.test.dsd"
    },
    ];
    
  return (
    <ul class={tw`relative accordion-collapse collapse`}>
    {feeds.filter(function (feed) {
        return feed.folder === props.selectedFolder; }).map((feed) => (
        <li class={tw`relative`}>
        <a href="#!" class={tw`flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded 
        hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out`}>{feed.name}!</a>
        </li>))}
    </ul>
  );
}
