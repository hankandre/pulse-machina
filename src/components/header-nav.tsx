import Image from "next/image";
import Link from "next/link";

export function HeaderNav() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <Link href="/" className="mr-4 flex items-center gap-1 lg:mr-6">
            <Image
              src="/logo.png"
              className="h-12 w-12"
              width={200}
              height={200}
              alt="A cog with a pulse eminating from it."
            />
            <span>PulseMachina</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
