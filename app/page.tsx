import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";

export default function Home() {
  return (
    <main className="w-screen uppercase  h-screen overflow-hidden flex flex-col items-center justify-center gap-8">
      <Image src={Logo} alt="WIP Logo" />
      <div className="text-center">
        <h1 className="text-lg">Work In Progress / Applied Creative</h1>
        <h2 className="text-neutral-500 text-sm mt-1">
          Created by{" "}
          <Link
            className="hover:text-neutral-100 transition-all"
            href="https://bridger.to"
          >
            Bridger Tower
          </Link>
          . Coming soon.
        </h2>
        <p className="text-sm text-neutral-500">© WIP.AC / 2024</p>
      </div>
    </main>
  );
}
