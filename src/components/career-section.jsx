import CareerPath from "./career/career-path";
import Section from "./shared/section";

export default function CareerSection() {
    const career = [
        {
            position: "Intern/Tutor",
            company: "Cogna - T.EX",
            timeInterval: "06/2022 - 06/2023",
            techStack: "Javascript, Typescript, Vue, React, SCSS, Node, Express, MySQL and MongoDB"
        },
        {
            position: "Front-end Developer",
            company: "Stefanini - Dell",
            timeInterval: "06/2023 - Present",
            techStack: "Javascript, React and Webpack Module Federation (Micro-frontends)"
        }
    ];

    return (
        <Section title="Career" id="career">
            <CareerPath career={career} />
        </Section>
    );
}