import CareerPath from "./career/career-path";
import Section from "./shared/section";

export default function CareerSection() {
    const career = [
        {
            position: "Intern/Tutor",
            company: "Cogna - T.EX",
            techStack: "Javascript, Typescript, Vue, React, SCSS, Node, Express, MySQL and MongoDB"
        },
        {
            position: "Front-end Developer",
            company: "Stefanini - Dell",
            techStack: "Javascript, React and Webpack Module Federation (Micro-frontends)"
        }
    ]

    return (
        <Section title="Career">
            <CareerPath career={career} />
        </Section>
    );
}