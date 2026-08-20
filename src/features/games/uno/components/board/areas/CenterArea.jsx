import './CenterArea.css'
import UnoDiscardPile from "../piles/UnoDiscardPile.jsx";
import UnoDrawPile from "../piles/UnoDrawPile.jsx";
import ActionArea from "./ActionArea.jsx";

export default function CenterArea({
                                       drawPileSize,
                                       discardPileSize,
                                       lastAction,
                                       topCard,
                                       availableActions,
                                       currentColor,
                                       onDrawCard
                                   }) {
    const {canDraw} = availableActions;

    return (
        <div className="center-area">
            <ActionArea lastAction={lastAction}/>
            <UnoDrawPile
                drawPileSize={drawPileSize}
                canDraw={canDraw}
                onDrawCard={onDrawCard}/>
            <UnoDiscardPile
                discardPileSize={discardPileSize}
                currentColor={currentColor}
                topCard={topCard}/>
        </div>
    )
}