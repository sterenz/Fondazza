import Link from "next/link";
import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full p-6 m-auto animate-fade-in-down pb-8">
      <div className="flex justify-between">
        <Link href="" className="">
          {/* <Image
            className=""
            src="/LaFondazza_LOGO.svg"
            alt="La Fondazza logo"
            width={180}
            height={37}
            priority
          /> */}
          <p className="font-display text-3xl font-bold pb-8">La Fondazza</p>
        </Link>
        {/* <nav>
            <ul className="hidden md:flex items-center gap-x-6 cursor-pointer">
                <Link href="/">
                    <li className="">
                        It
                    </li>
                </Link> 
            </ul>
        </nav> */}
      </div>
    </header>
  )
}


