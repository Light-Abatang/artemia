import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer () {
    const year = new Date ().getFullYear();
    return (
        <footer className="grid grid-cols-1 md:px-8 md:grid-cols-2 lg:grid-cols-3 lg:py-4 lg:px-2 lg:gap-0">
            <div>
                <p className="text-2xl text-blue-500 font-bold">Artemia</p>
                <p className="text-xs text-gray-600">&copy; {year}Business Management Application</p>                                  
            </div>
            <div>
                <p className="text-2xl text-gray-700">Head Office</p>
                <p className="text-xs text-gray-700">Along Nyanya-karshi road, Efko Mall</p>                                  
            </div>
            <div>
                <ul className="flex lg:justify-end items-center gap-4">
                    <li><Link href="#"><IoLogoLinkedin  className="text-blue-500  text-2xl"/></Link></li>
                    <li><Link href="#"><FaFacebookSquare className="text-blue-500  text-2xl"/></Link></li>
                    <li><Link href="#"><FaSquareXTwitter className="text-blue-500  text-2xl"/></Link></li>
                </ul>
                <ul className="flex lg:justify-end items-center gap-4">
                    <li><Link href="#" className="text-sm text-gray-600">Terms of use</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600">Glossary</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600">FAQs</Link></li>
                </ul>
            </div>
        </footer>
    )
}