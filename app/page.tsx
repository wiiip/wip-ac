// import Image from "next/image";
// import Icon from "@/public/icon.svg";
import PixelRearrange from "@/app/wip";

const Projects = [
  {
    name: "Outr",
    href: "https://outr.io",
  },
  {
    name: "Wavefinder",
    href: "https://wavefinder.io",
  },
  {
    name: "Router.so",
    href: "https://router.so",
  },
  {
    name: "SwyftFin",
    href: "https://swyftfin.com",
  },
  {
    name: "Ampry",
    href: "https://ampry.com",
  },
  {
    name: "ASAP Engineering",
    href: "https://studiomojave.com",
  },
  {
    name: "Studio Mojave",
    href: "https://studiomojave.com",
  },
  {
    name: "Travel Melloe",
    href: "https://travelmellow.com",
  },
  {
    name: "Zion",
    href: "https://zion.surf",
  },
];

export default function Home() {
  return (
    <main className="p-6 grid gap-12">
      <PixelRearrange />

      <div>
        <h1>Work In Progress / Applied Creative</h1>
        <p>
          Software Design and Development by{" "}
          <OutLink href="https://bridger.to">Bridger Tower</OutLink>.
        </p>
      </div>

      <div>
        <h2 className="sr-only">Currently Building</h2>
        {Projects.map((project) => (
          <OutLink block key={project.name} href={project.href}>
            {project.name}
          </OutLink>
        ))}
      </div>

      <div>
        <p>contact me at bridger @ wip.ac</p>
        <p>© wip 2024</p>
      </div>
    </main>
  );
}

const OutLink = ({
  href,
  children,
  block,
}: {
  href: string;
  children: React.ReactNode;
  block?: boolean;
}) => {
  return (
    <a
      href={href}
      className={`underline w-fit decoration-zinc-400 transition-all hover:decoration-zinc-900 ${
        block ? "block" : "inline"
      }`}
    >
      {children}
    </a>
  );
};
