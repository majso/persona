/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { tw } from "@twind";

export default function Profile() {
  return (
    <>
      <div class={tw`relative ml-3 mr-3`}>
        <div>
          <button type="button" class={tw`bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800
          focus:ring-white`} id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <span class={tw`sr-only`}>Open user menu</span>
            <img class={tw`h-6 w-6 rounded-full`} src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </button>
        </div>
   
            {/* Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95" */}
        
        <div class={tw`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
        {/* Active: "bg-gray-100", Not Active: "" */}
          <a href="#" class={tw`block px-4 py-2 text-sm text-gray-700`} role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
          <a href="#" class={tw`block px-4 py-2 text-sm text-gray-700`} role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
          <a href="#" class={tw`block px-4 py-2 text-sm text-gray-700`} role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
        </div>
      </div>
    </>
  );
}