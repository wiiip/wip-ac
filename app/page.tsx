import { PixelRearrange } from "@/components/wip";
import { Hero } from "@/components/hero";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="sm:p-6 md:p-12">
      <section className="sm:border max-w-4xl m-auto divide-y leading-tighter tracking-tight">
        <Hero />
        <Block className="">
          <p>Work In Progress / Applied Creative</p>
          <p className="text-muted-foreground">
            A design and development company by Bridger Tower
          </p>
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
