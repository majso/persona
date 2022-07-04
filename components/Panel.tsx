/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { tw } from "@twind";


const panels = [
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
        name: "Sciencenews",
        folder: "Science",
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
    name: "Techweb",
    folder: "Tech News",
    url: "www.test.dsd"
  },
  {
      name: "Sciencenews",
      folder: "Science",
      url: "www.test.dsd"
  },
    ];


export default function Panel() {
  return (
    <>
      {panels.map((panel) => (
        <div class={tw`flex flex-col flex-wrap bg-white dark:bg-slate-800 max-w-xs max-h-[24rem] border`}>
            <img class={tw``} src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
          <div class={tw`p-4`}>
            <h5 class={tw`text-gray-900 text-base font-medium mb-2`}>{panel.name}</h5>
            <p class={tw`flex text-gray-700 text-sm mb-4`}>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <div class={tw`flex justify-between`}>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg> 
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>          
            </div>
          </div>
        </div>
      ))}
    </>
  );
}