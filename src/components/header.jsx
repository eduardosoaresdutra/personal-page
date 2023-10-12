import Button from "./shared/button";
import { H1, H3 } from "./shared/headings";

export default function Header() {
    return (
        <header className="flex flex-col justify-center items-center w-full h-screen bg-[url('/backgrounds/header-waves.svg')] bg-cover">
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col justify-center items-center gap-1">
                <H3>Hello, I'm</H3>
                <H1 className="text-center">Eduardo <span className="text-aquamarine">Dutra</span></H1>
                </div>
                <div className="flex flex-row gap-3">
                    <Button>About me</Button>
                    <Button option="secondary">Contact</Button>
                </div>
            </div>
        </header>
    );
}