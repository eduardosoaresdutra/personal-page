import Button from "./shared/button";
import { H1, H3 } from "./shared/headings";

export default function Header() {
    return (
        <header className="flex flex-col justify-center items-center w-screen gap-10 h-screen">
            <div className="flex flex-col justify-center items-center gap-1">
                <H3>Hello, I'm</H3>
                <div className="flex flex-row justify-center gap-8">
                    <H1>Eduardo</H1>
                    <H1 className="text-aquamarine">Dutra</H1>
                </div>
            </div>
            <div className="flex flex-row gap-6">
                <Button>About me</Button>
                <Button option="secondary">Contact</Button>
            </div>
        </header>
    );
}