import { H2 } from "./headings";

export default function Section({ title = "", className = "", id = "", children }) {
    return (
        <section className={`flex flex-col bg-space-cadet items-center h-screen py-16 ${className}`} id={id}>
            <H2 className="text-center w-2/3 pb-4 mb-12">{title}</H2>
            {children}
        </section>
    );
}