import PillLink from "./_components/PillLink";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-20 font-san">


      <main className="flex flex-1 w-full max-w-xl flex-col items-center md:justify-center md:pt-0 pt-8 gap-4">
        <Image 
          src="/homepage-logo.svg"
          alt="website logo"
          width={300}
          height={300}
          className="size-32" 
        />

        <h1 className="text-6xl font-semibold tracking-tight text-center text-black">Linden Beaumont</h1>
        <p className="mx-auto text-xl max-w-xl pt-1 pb-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Melbourne based software developer.
          See my projects below or get in touch at{" "}
        <a
            href="mailto:lindenbeaumont@protonmail.com"
            className="text-black underline underline-offset-2  text-zinc-700 hover:text-zinc-600"
          >
            lindenbeaumont@protonmail.com
          </a>.
        </p>

        <div className="flex w-full flex-col items-center gap-2">
          <PillLink
            href="/garden-planner"
            label="Garden Planner"
            iconSrc="/garden-planner.svg"
            external={false}
          />
        </div>

        <PillLink
          href="https://github.com/GreenYellowLight?tab=repositories"
          label="GitHub"
          iconSrc="/github.svg"
          external={true}
        />
      </main>
    </div>
  );
}
