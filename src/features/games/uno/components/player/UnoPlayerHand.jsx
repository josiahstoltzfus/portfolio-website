import './UnoPlayerHand.css'
import UnoHandCard from "../cards/UnoHandCard.jsx";
import {sortCards} from "../../utils/utils.js";
import SlidingCarousel from "../../../../../shared/components/SlidingCarousel.jsx";

export default function UnoPlayerHand({
                                          localPlayer,
                                          playableCardIds,
                                          pendingCardId,
                                          onPlayCard,
                                      }) {
    const sortedHand = sortCards(localPlayer.hand);

    return (
        <SlidingCarousel
            ariaLabel="Player Cards"
            showButtons={false}
            className="uno-player-hand-carousel"
            trackClass="uno-player-hand-track">
            {sortedHand.map((card) => {
                const isPlayable = playableCardIds.includes(card.cardId);

                function handlePlayCard() {
                    onPlayCard(localPlayer.id, card.cardId);
                }

                return (
                        <UnoHandCard
                            key={card.cardId}
                            card={card}
                            pendingCardId={pendingCardId}
                            isPlayable={isPlayable}
                            onPlayCard={handlePlayCard}/>
                )
            })}
        </SlidingCarousel>
    )
}
