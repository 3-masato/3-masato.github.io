import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-auto px-4 py-2 flex justify-center items-center">
      <div>
        <Link href="/" className="font-black text-2xl">
          Portfolio
        </Link>
      </div>
    </header>
  );
}
