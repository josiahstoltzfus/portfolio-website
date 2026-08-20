import './UnoHandCard.css'
import UnoCard from "./UnoCard.jsx";

export default function UnoHandCard({
                                        card,
                                        pendingCardId,
                                        isPlayable,
                                        onPlayCard,
                                    }) {
    const isPending = pendingCardId === card.cardId;

    return (
        <button
            type="button"
            onClick={onPlayCard}
            disabled={!isPlayable}
            className={`uno-hand-card 
            ${isPlayable ? "uno-hand-card-is-playable" : ""}
            ${isPending ? "uno-hand-card-is-pending" : ""}`}>
            <UnoCard card={card}/>
        </button>
    )
}