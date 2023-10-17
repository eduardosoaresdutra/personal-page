import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { H3, H4 } from "../shared/headings";

export default function CareerFragment({ index = 0, position = "", company = "", timeInterval = "", techStack = "" }) {
    const Company = <H3>{company}</H3>
    const Position = <H4>{position}</H4>
    const TimeInterval = <p className="text-base"><em>{timeInterval}</em></p>
    const TechStack = <p className="text-lg">{techStack}</p>
    
    const CareerInfo =
    <div className={`flex flex-col pt-6 px-4 ${index % 2 ? "text-left" : "text-right"}`}>
        {Company}
        {Position}
        {TimeInterval}
        {TechStack}
    </div>;

    function buildCareerInfo(side = "left") {
        if (side === "left" && !index % 2) {
            return CareerInfo;
        }
        if (side === "right" && index % 2) {
            return CareerInfo;
        }

        return <></>;
    }

    return (
        <div className="flex flex-row">
            <div className="w-72 h-56">{ buildCareerInfo("left") }</div>
            <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faCircle} size="xs" className="text-aquamarine" />
                <div className="bg-aquamarine w-1 h-full"></div>
            </div>
            <div className="w-72 h-40">{ buildCareerInfo("right") }</div>
        </div>
    );
}