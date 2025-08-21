import Image from "next/image";
import Logo from "@/public/logo.svg";
import Icon from "@/public/icon.svg";

import { Shader } from "./shader";

export default function Home() {
  return (
    <main content="relative">
      <Shader />
      <Image src={Icon} alt="WIP ICON"></Image>
      <Image src={Logo} alt="WIP LOGO"></Image>
    </main>
  );
}
