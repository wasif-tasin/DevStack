import type { ITechnology } from "../../Type";

interface TechnologyProps {
   technology:ITechnology;
}

const TechnologyCard = ({technology} : TechnologyProps) => {
    return (
        <div>
           <h2>{technology.name}</h2>
        </div>
    );
};

export default TechnologyCard;