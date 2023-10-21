import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faBriefcase, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function NavegationBar() {
    return (
        <>
            <nav className="w-80 bg-slate-blue h-screen
                            md:flex flex-col justify-around items-center
                            hidden">
                <Image
                    src="/profile.png"
                    width={150}
                    height={150}
                    className="border-2 border-aquamarine rounded-full
                                p-1"
                />
                <ul className="flex flex-col gap-8
                            text-2xl">
                    <li>
                        <Link href="#home" className="flex flex-row gap-2 text-xl">
                            <FontAwesomeIcon icon={faHouse} />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#about" className="flex flex-row gap-2 text-xl" >
                            <FontAwesomeIcon icon={faUser} />
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#career" className="flex flex-row gap-2 text-xl">
                            <FontAwesomeIcon icon={faBriefcase} />
                            Career
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="flex flex-row gap-2 text-xl">
                            <FontAwesomeIcon icon={faAddressBook} />
                            Contact
                        </Link>
                    </li>
                </ul>
                <span>Copyright</span>
            </nav>
        </>
    );
}