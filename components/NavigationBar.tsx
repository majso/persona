/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Profile from "../components/Profile.tsx";

export default function NavigationBar(props: { active: string }) {
  const items = [
    {
      name: "All Articles",
      href: "/",
    },
    {
      name: "Docs",
      href: "/",
    },
  ];

  return (
    <nav class={tw`border-b underline py-2`}>
      <ul class={tw`flex justify-end gap-8 mx-4`}>
        {items.map((item) => (
          <li>
            <a
              href={item.href}
              class={tw`text-gray-600 hover:underline ${
                props.active == item.href ? "font-bold" : ""
              }`}
            >
              {item.name}
            </a>
            
          </li>
        ))}
           <Profile />
      </ul>
   

    </nav>
  );
}