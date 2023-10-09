import Image from "next/image";

export default function NavegationBar() {
    return (
        <>
            <nav className="w-96 bg-slate-blue h-screen
                            flex flex-col justify-center items-center">
                <Image
                    src="/profile.png"
                    width={120}
                    height={120}
                    className="border-4 border-tropical-indigo rounded-full"
                />
                <ul className="flex flex-col gap-4
                            text-2xl">
                    <li>icon Home</li>
                    <li>icon About</li>
                    <li>icon Career</li>
                    <li>icon Contact</li>
                </ul>
            </nav>
        </>
    );
}