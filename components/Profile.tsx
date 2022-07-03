/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";

export default function Profile() {
  return (
    <a href="#!">
      <div class={tw`flex items-center`}>
        <div class={tw`shrink-0`}>
          <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class={tw`rounded-full w-6`} alt="Avatar" />
        </div>
      </div>
    </a>
  );
}