import Link from "next/link"
import IubendaPrivacyPolicy from "../components/IubendaPrivacyPolicy.js"

export default function Footer() {
  return (
    <section className="w-full p-6 m-auto animate-fade-in-down pb-12 flex flex-col text-sm">
      <div className="md:flex justify-between">
        <p className="pt-4">
          Az. Agr. La Fondazza di Leena Pasanen - Grizzana Morandi (BO), Italy
        </p>
        <div>
            <ul className="flex items-center gap-x-6 cursor-pointer">
                <li className="pt-4">
                  <IubendaPrivacyPolicy />
                </li> 
            </ul>
        </div>
      </div>
    </section>
  )
}