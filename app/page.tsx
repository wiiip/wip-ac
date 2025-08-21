import Image from "next/image";
import Logo from "@/public/logo.svg";
import Icon from "@/public/icon.svg";

export default function Home() {
  return (
    <div>
      <Image src={Icon} alt="WIP ICON"></Image>
      <Image src={Logo} alt="WIP LOGO"></Image>
    </div>
  );
}
