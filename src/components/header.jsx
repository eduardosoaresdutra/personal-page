import { H1, H3 } from "./shared/headings";

export default function Header() {
    return (
        <header className="flex flex-col justify-between items-center w-screen">
            <H3>Hello, I'm</H3>
            <H1>Eduardo Soares</H1>
        </header>
    );
}