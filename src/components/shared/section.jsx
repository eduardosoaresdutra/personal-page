import { H2 } from "./headings";

export default function Section({ title = "", className = "", id = "", children }) {
    return (
        <section className={`flex flex-col items-center h-screen py-16 px-16 ${className}`} id={id}>
            <H2 className="text-center w-3/5 pb-4 mb-12 border-b-2 border-aquamarine">{title}</H2>
            {children}
        </section>
    );
}