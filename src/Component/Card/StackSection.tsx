import type { ITechnology } from "../../Type";
import TechnologyCard from "./TechnologyCard";

interface IselectedCards {
    selectedCards: ITechnology[];
    setSelectedCards: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const StackSection = ({ selectedCards, setSelectedCards }: IselectedCards) => {

    const handleRemoveTechnologyCards = (technology: ITechnology) => {
        const restTechnologyCards = selectedCards.filter(selectedCards => selectedCards.name != technology.name)
        setSelectedCards(restTechnologyCards)
    }
    return (
        <div>
            <div className="w-90  bg-base-100 border-2 p-4 rounded-2xl border-gray-200 shadow-sm mt-8">
                <h3 className="font-bold text-lg">
                    Your Stack
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                    {selectedCards.length === 0 ? "No technologies selected yet." : `${selectedCards.length} Technology Selected`}
                </p>
                {
                    selectedCards.length === 0 ? (
                        <div className="border border-dashed rounded-xl h-24 mt-4 flex items-center justify-center">
                            <span className="text-sm text-gray-400">
                                Your stack is empty.
                            </span>
                        </div>
                    ) : (
                        <div>
                            {selectedCards.map((technology) => (
                                <div key={technology.id}
                                    className="flex items-center gap-3 border rounded-xl p-3">
                                    <img src={technology.icon} alt={technology.name} className="w-10 h-10 object-contain" />

                                    <div>
                                        <h4 className="font-bold"> {technology.name}</h4>
                                        <p className="text-sm text-gray-400"> {technology.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default StackSection;