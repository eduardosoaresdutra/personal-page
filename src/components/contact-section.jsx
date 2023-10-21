import Button from "./shared/button";
import { H3, H4 } from "./shared/headings";
import Section from "./shared/section";

export default function ContactSection() {
    return (
        <Section title="Contact" id="contact">
            <div className="flex flex-col h-full text-center justify-center align-center">
                <H3>Need to reach out?</H3>
                <H4>Please, feel free to send a message on LinkedIn or e-mail me!</H4>
                <div className="flex flex-row justify-center gap-4 my-16">
                    <Button option="primary">
                        LinkedIn
                    </Button>
                    <Button option="secondary">
                        E-mail
                    </Button>
                </div>
            </div>
        </Section>
    );
}