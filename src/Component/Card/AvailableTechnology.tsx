import { use, useState } from "react";
import type { ITechnology } from "../../Type";
import TechnologyCard from "./TechnologyCard";
import StackSection from "./StackSection";

interface CardProps {
    cardDataPromise: Promise<ITechnology[]>;
}

const AvailableTechnology = ({ cardDataPromise }: CardProps) => {
    const [selectedCards, setSelectedCards] = useState<ITechnology[]>([]);
    const card = use(cardDataPromise);
    return (
        <div className="container mx-auto">
            <div>
                <h2 className="text-5xl font-bold">Explore the <span className="text-[#E14AA4]">Technologies</span> </h2>
                <p className="mt-3 text-[22px] text-gray-500">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="flex gap-6 items-start">

                {/* Technology Card Section */}

                <div className="grid grid-cols-3 gap-5 flex-1">
                    {card.map((technology: ITechnology) => (
                        <TechnologyCard
                            technology={technology}
                            key={technology.id}
                            selectedCards = {selectedCards}
                            setSelectedCards = {setSelectedCards}
                        />
                    ))}
                </div>

                {/* Right Side Stack Card Section */}
                <StackSection selectedCards = {selectedCards} setSelectedCards = {setSelectedCards}></StackSection>

            </div>
        </div>
    );
};

export default AvailableTechnology;