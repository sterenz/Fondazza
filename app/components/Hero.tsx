import Image from 'next/image'
import Link from "next/link";
import hero from "@/public/LaFondazza_oak.svg"

export default function Hero() {
  return (
  <section id='hero' className='p-8'>
    <article className='grid max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:py-16 lg:grid-cols-12'>
      <div className='mr-auto place-self-center lg:col-span-5'>
        <h1 className='font-display text-6xl font-bold pb-8'>La Fondazza</h1>
        <p>Benvenuto! Il sito è in costruzione ma per qualsiasi informazione riguardo ai nostri prodotti, scrivici una mail a:</p>
        <Link className="underline font-display text-4xl" href="mailto:vino@fondazza.it">vino@fondazza.it</Link>
      </div>
      <div className='lg:mt-0 lg:col-span-7 lg:flex'>
        <Image
          className="bg-cover m-auto min-w-fit"
          priority={false}
          src={hero}
          alt="La Fondazza oak"
        />
      </div>
    </article>
  </section>
  )
}