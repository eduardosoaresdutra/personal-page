import CareerFragment from "./career-fragment";

export default function CareerPath({ career = [] }) {
    return (
        <div>
            {   career.map((job, index) =>
                <CareerFragment key={job} index={index} position={job.position} company={job.company} timeInterval={job.timeInterval} techStack={job.techStack} />
            )}
        </div>
    );
}