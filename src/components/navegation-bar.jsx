import Image from "next/image";

export default function NavegationBar() {
    return (
        <>
            <nav className="w-96 bg-slate-blue h-screen
                            flex flex-col justify-around items-center">
                <Image
                    src="/profile.png"
                    width={150}
                    height={150}
                    className="border-2 border-aquamarine rounded-full
                                p-1"
                />
                <ul className="flex flex-col gap-4
                            text-2xl">
                    <li>icon Home</li>
                    <li>icon About</li>
                    <li>icon Career</li>
                    <li>icon Contact</li>
                </ul>
                <span>Copyright</span>
            </nav>
        </>
    );
}