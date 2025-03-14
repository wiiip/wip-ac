import Image from "next/image";

export default function Home() {
  return (
    <main className="sm:p-6 md:p-12">
      <section className="sm:border max-w-4xl m-auto divide-y">
        <Block>
          <h1>Work In Progress</h1>
        </Block>
      </section>
    </main>
  );
}

const Block = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4">{children}</div>;
};
