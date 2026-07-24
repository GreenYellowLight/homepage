import Image from "next/image";

type PillLinkProps = {
  href: string;
  label: string;
  iconSrc: string;
  external: boolean
};

export default function PillLink({
  href,
  label,
  iconSrc,
  external
}: PillLinkProps) {

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`flex h-12 md:w-xs w-full items-center justify-center gap-2 rounded-full text-xl font-medium 
        transition-colors bg-gray-200 hover:bg-gray-400`}
    >
      <Image
        src={iconSrc}
        alt=""
        width={20}
        height={20}
        className="rounded-sm"
      />
      {label}
    </a>
  );
}
