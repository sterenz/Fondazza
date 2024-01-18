import Link from "next/link"

export default function Footer() {
  return (
    <section className="w-full p-6 m-auto animate-fade-in-down pb-12 absolute bottom-0">
      <div className="flex justify-between">
        <p>Az. Agr. La Fondazza di Leena Pasanen - Grizzana Morandi (BO), Italy</p>
        {/* <div>
            <ul className="hidden md:flex items-center gap-x-6 cursor-pointer">
                <Link href="/">
                    <li className="">
                        PRIVACY
                    </li>
                </Link> 
            </ul>
        </div> */}
      </div>
    </section>
  )
}