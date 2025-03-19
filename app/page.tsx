import { PixelRearrange } from "@/components/wip";
import { Hero } from "@/components/hero";

import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Home() {
  return (
    <main className="sm:p-6 md:p-12">
      <section className="sm:border max-w-4xl m-auto divide-y leading-tighter tracking-tight">
        <Hero />
        <Block className="uppercase flex justify-between items-center">
          <p>Work In Progress</p>
          <p>Applied Creative</p>
        </Block>

        <Block className="p-0 grid grid-cols-3">
          {projects.map((project) => (
            <Client
              key={project.href}
              href={project.href}
              name={project.name}
            />
          ))}
        </Block>

        <Block className="flex items-center justify-between">
          <PixelRearrange />
          <p className="text-sm text-muted-foreground">
            © Work In Progress, 2025
          </p>
        </Block>
      </section>
    </main>
  );
}

const Block = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6 text-xl", className)}>{children}</div>;
};

const Client = ({ href, name }: { href: string; name: string }) => {
  return (
    <a
      href={href}
      className="p-12 flex items-center justify-center outline outline-border/20"
    >
      {name}
    </a>
  );
};
