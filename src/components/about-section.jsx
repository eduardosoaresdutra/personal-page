import Button from "./shared/button";
import Section from "./shared/section";

export default function AboutSection() {
    return (
        <Section title="About me" id="about">
            <p className="w-2/3 text-lg text-justify my-2">
                Hi, nice to see you here! I'm Eduardo, a web developer, computer scientist, animal lover and an entushiast into the games world.
                Throughout my career I had the oportunity to work from a startup project to one of Brazil's biggest IT consulting company, where I had the privilege to contribute
                in a big tech company project with teams all along the globe! My development experience has been targeted on web development in general, with focus on front-end
                development.
            </p>
            <p className="w-2/3 text-lg text-justify my-2">
                During my years into coding I worked with lots of different technologies and stacks like: Javascript, Typescript, React, Next, Vue, Node, SQL and NoSQL Databases,
                microfront-end architecture, even C# and Java has passed through me in personal projects!
            </p>
            <p className="w-2/3 text-lg text-justify my-2">
                If you feel interested into knowing more about me, feel free to check out my social profiles bellow.
            </p>
            <div>
                <Button>Button 1</Button>
                <Button option="secondary">Button 2</Button>
            </div>
        </Section>
    );
}