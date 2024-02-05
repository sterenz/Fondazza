import Link from "next/link";
import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full p-6 m-auto animate-fade-in-down pb-12">
      <div className="flex justify-between">
        <Link href="/" className="">
          <Image
            className=""
            src="/LaFondazza_LOGO.svg"
            alt="La Fondazza logo"
            width={180}
            height={37}
            priority
          />
        </Link>
        <nav>
            <ul className="hidden md:flex items-center gap-x-6 cursor-pointer">
                <Link href="/it">
                    <li className="">
                        IT
                    </li>
                </Link> 
                <Link href="/en">
                    <li className="">
                        EN
                    </li>
                </Link> 
            </ul>
        </nav>
      </div>
    </header>
  )
}


