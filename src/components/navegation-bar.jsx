import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faBriefcase, faAddressBook } from "@fortawesome/free-solid-svg-icons";

export default function NavegationBar() {
    return (
        <>
            <nav className="w-80 bg-slate-blue h-screen
                            flex flex-col justify-around items-center">
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
                        <a href="" className="flex flex-row gap-2 text-xl">
                            <FontAwesomeIcon icon={faHouse} />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex flex-row gap-2 text-xl">
                            <FontAwesomeIcon icon={faUser} />
                            About
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex flex-row gap-2 text-xl">
                            <FontAwesomeIcon icon={faBriefcase} />
                            Career
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex flex-row gap-2 text-xl">
                            <FontAwesomeIcon icon={faAddressBook} />
                            Contact
                        </a>
                    </li>
                </ul>
                <span>Copyright</span>
            </nav>
        </>
    );
}