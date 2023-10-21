import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { H3, H4 } from "../shared/headings";

export default function CareerFragment({ index = 0, position = "", company = "", timeInterval = "", techStack = "" }) {
    const Company = <H3>{company}</H3>
    const Position = <H4>{position}</H4>
    const TimeInterval = <p className="text-xs md:text-base pt-2"><em>{timeInterval}</em></p>
    const TechStack = <p className="text-base md:text-lg pt-4">
        <>
            Tech Stack:<br/>
            {techStack}
        </>
    </p>
    
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
            <div className="w-32 h-max md:w-72 md:h-max">{ buildCareerInfo("left") }</div>
            <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faCircle} size="xs" className="text-aquamarine" />
                <div className="bg-aquamarine w-1 h-full"></div>
            </div>
            <div className="w-32 h-max md:w-72 md:h-max">{ buildCareerInfo("right") }</div>
        </div>
    );
}