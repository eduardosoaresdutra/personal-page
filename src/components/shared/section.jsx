import { H2 } from "./headings";

export default function Section({ title = "", className = "", id = "", children }) {
    return (
        <section className={`flex flex-col bg-space-cadet items-center min-h-screen py-16 px-10 md:px-0 overflow-x-hidden ${className}`} id={id}>
            <H2 className="text-center w-2/3 pb-4 mb-12">{title}</H2>
            {children}
        </section>
    );
}