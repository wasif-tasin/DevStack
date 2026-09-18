import { use } from "react";
import type { ITechnology } from "../../Type";
import TechnologyCard from "./TechnologyCard";

interface CardProps {
    cardDataPromise: Promise<ITechnology[]>;
}

const AvailableTechnology = ({ cardDataPromise }: CardProps) => {
    const card = use(cardDataPromise);
    console.log(card)
    return (
        <div className="container mx-auto">
            <div>
                <h2 className="text-5xl font-bold">Explore the <span className="text-[#E14AA4]">Technologies</span> </h2>
                <p className="mt-3 text-[22px] text-gray-500">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div>
                {
                card.map((technology : ITechnology) => {
                    return <div>
                        <TechnologyCard technology = {technology} key={technology.id}></TechnologyCard>
                    </div>
                })}
            </div>
        </div>
    );
};

export default AvailableTechnology;