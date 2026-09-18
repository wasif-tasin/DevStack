import { MdClose} from "react-icons/md";
import type { ITechnology } from "../../Type";

interface IselectedCards {
    selectedCards: ITechnology[];
    setSelectedCards: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const StackSection = ({ selectedCards, setSelectedCards }: IselectedCards) => {

    const handleRemoveTechnologyCards = (technology: ITechnology) => {
        const restTechnologyCards = selectedCards.filter(item => item.id != technology.id);
        setSelectedCards(restTechnologyCards)
    }
    const handleRemoveAll = () => {
        setSelectedCards([]);
    };
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
                                    className="flex justify-between items-center gap-3 border border-gray-200 rounded-xl p-3 mt-3">
                                    <div className="flex ">

                                        <img src={technology.icon} alt={technology.name} className="w-10 h-10 object-contain" />
                                        <div className="pl-2">
                                            <h4 className="font-bold"> {technology.name}</h4>
                                            <p className="text-sm text-gray-400"> {technology.category}</p>
                                        </div>
                                    </div>
                                    <button className=" text-2xl cursor-pointer" onClick={() => handleRemoveTechnologyCards(technology)}>
                                        <MdClose />
                                    </button>
                                </div>
                            ))}
                            {
                                selectedCards.length > 0 && (
                                    <button
                                        onClick={handleRemoveAll}
                                        className="w-full mt-4 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50"
                                    >
                                        Remove All
                                    </button>
                                )
                            }
                        </div>
                    )}
            </div>
        </div>
    );
};

export default StackSection;