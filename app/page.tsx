import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full py-16 text-center">
        <h1 className="text-6xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Linden Beaumont
        </h1>
        <p className="mx-auto mt-4 text-xl max-w-sm px-6 text-sm text-zinc-500 dark:text-zinc-400">
          Melbourne based software developer with 2 years experience. See my projects below or get in touch at{" "}
          <a
            href="mailto:lindenbeaumont@protonmail.com"
            className="text-black underline underline-offset-2 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
          >
            lindenbeaumont@protonmail.com
          </a>
        </p>
      </header>

      <main className="flex flex-1 w-full max-w-md flex-col items-center justify-center gap-4 px-6">
        <div className="flex w-full flex-col items-center gap-2">
          <a
            href="/garden-planner"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            <Image
              src="/garden-planner.png"
              alt="Garden Planner logo"
              width={20}
              height={20}
              className="rounded-sm"
            />
            Garden Planner
          </a>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Not on GitHub
          </p>
        </div>

        <a
          href="https://github.com/GreenYellowLight"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/[.08] px-5 text-base font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
        >
          <Image
            className="dark:invert"
            src="/github.svg"
            alt="GitHub logo"
            width={20}
            height={20}
          />
          GitHub
        </a>
      </main>
    </div>
  );
}
