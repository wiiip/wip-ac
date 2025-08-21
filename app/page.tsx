import Image from "next/image";
import Logo from "@/public/logo.svg";
import Icon from "@/public/icon.svg";
import Link from "next/link";

import { Shader } from "./shader";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#222]">
      <section className="z-50 fixed top-6 left-6 flex gap-6">
        <Image src={Icon} height={48} alt="WIP ICON"></Image>
        <Image src={Logo} height={36} alt="WIP LOGO"></Image>
      </section>
      <section className="z-50 fixed bottom-6 right-6 text-white">
        <Link href="/about">&rarr; about</Link>
      </section>
      <Shader
        className="fixed w-full h-full top-0 right-0 z-10"
        colorBack="#222"
        colorFront="#f5f5f5"
        speed={0.2}
      />
    </main>
  );
}
