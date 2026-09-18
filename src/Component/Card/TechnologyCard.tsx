import type { ITechnology } from "../../Type";

interface TechnologyProps {
    technology: ITechnology;
    selectedCards: ITechnology[];
    setSelectedCards: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({ technology, selectedCards, setSelectedCards }: TechnologyProps) => {

    const isAdded = selectedCards.some((item) => item.id === technology.id);

    const handleAddedTechnology = () => {
        setSelectedCards([...selectedCards, technology]);
    };

    return (
        <div className="card bg-base-100 border border-gray-200 shadow-sm mt-8 rounded-2xl">
            <div className="flex justify-between items-start m-5">
                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-10 h-10 object-contain"
                />

                <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-500">
                    {technology.badge}
                </span>
            </div>
            <div className="mt-4 m-5 ">

                <h2 className="text-lg font-bold">
                    {technology.name}
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                    {technology.description}
                </p>
                <div className="flex justify-between items-center text-xs mt-5">
                    <span className="bg-gray-50 px-2 py-1">
                        {technology.category}
                    </span>

                    <span>
                        {technology.difficulty}
                    </span>

                    <span>
                        ⭐ {technology.rating}
                    </span>
                </div>
                <button
                    disabled={isAdded}
                    onClick={handleAddedTechnology}
                    className={`w-full cursor-pointer rounded-lg py-2 mt-4 ${isAdded ? "bg-gray-100 text-gray-600" : "bg-black text-white"}`}>
                    {isAdded === true ? "Added" : "Add to Stack"}
                </button>

            </div>
        </div>
    );
};

export default TechnologyCard;