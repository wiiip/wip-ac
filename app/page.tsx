import Image from "next/image";
import Icon from "@/public/icon.svg";

const Projects = [
  {
    name: "Julius",
    href: "https://julius.ai",
  },
  {
    name: "Ampry",
    href: "https://ampry.com",
  },
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
];

export default function Home() {
  return (
    <main className="p-6 grid gap-12">
      <Image
        src={Icon}
        className="invert"
        width={48}
        height={48}
        alt="WIP Icon"
      />

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
