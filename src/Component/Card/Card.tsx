import { use } from "react";
import type { ITechnology } from "../../Type";

interface CardProps {
    cardDataPromise: Promise<ITechnology[]>;
}

const Card = ({cardDataPromise}: CardProps) => {
    const card = use(cardDataPromise);
    console.log(card)
    return (
        <div>
            <h2>Explore the Technologies</h2>
        </div>
    );
};

export default Card;