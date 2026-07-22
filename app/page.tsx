import PillLink from "./_components/PillLink";

const yearsOfExperience = ( () => {
  const startYear = 2024
  const startMonth = 6 // TODO: include various work beforehand?

  const now = new Date()
  
  return now.getFullYear() - startYear + (startMonth > now.getMonth() ? 1 : 0)

})();


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-20 font-san">
      <header className="w-full py-16 text-center">
        <h1 className="text-6xl font-semibold tracking-tight text-black">
          Linden Beaumont
        </h1>
        <p className="mx-auto mt-4 text-xl max-w-sm px-6 text-sm text-zinc-500 dark:text-zinc-400">
          Melbourne based software developer with {yearsOfExperience} years experience. See my projects below or get in touch at{" "}
          <a
            href="mailto:lindenbeaumont@protonmail.com"
            className="text-black underline underline-offset-2 hover:text-zinc-600"
          >
            lindenbeaumont@protonmail.com
          </a>
        </p>
      </header>

      <main className="flex flex-1 w-full max-w-md flex-col items-center justify-center gap-4 px-6">
        <div className="flex w-full flex-col items-center gap-2">
          <PillLink
            href="/garden-planner"
            label="Garden Planner"
            iconSrc="/garden-planner.png"
            external={false}
          />
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Not on GitHub </p>
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
