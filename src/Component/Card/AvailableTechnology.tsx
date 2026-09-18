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
            <div className="flex gap-6 items-start">

                {/* Technology Card Section */}

                <div className="grid grid-cols-3 gap-5 flex-1">
                    {card.map((technology: ITechnology) => (
                        <TechnologyCard
                            technology={technology}
                            key={technology.id}
                        />
                    ))}
                </div>

                {/* Right Side Stack Card Section */}

                <div className="w-90  bg-base-100 border-2 p-4 rounded-2xl border-gray-200 shadow-sm mt-8">
                    <h3 className="font-bold text-lg">
                        Your Stack
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                        No technologies selected yet.
                    </p>

                    <div className="border border-dashed rounded-xl h-24 mt-4 flex items-center justify-center">
                        <span className="text-sm text-gray-400">
                            Your stack is empty.
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AvailableTechnology;