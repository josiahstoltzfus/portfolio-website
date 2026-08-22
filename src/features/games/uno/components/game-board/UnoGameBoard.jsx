import CenterArea from "./areas/CenterArea.jsx";
import OpponentArea from "./areas/OpponentArea.jsx";
import './UnoGameBoard.css'
import UnoPlayerArea from "./areas/UnoPlayerArea.jsx";
import {useRef} from "react";
import {registerRef} from "../../utils/utils.js";
import CurrentPlayerDot from "./indicators/CurrentPlayerDot.jsx";
import WildColorModal from "../modals/WildColorModal.jsx";
import ActionArea from "./areas/ActionArea.jsx";

export default function UnoGameBoard({
                                         gameState,
                                         lastAction,
                                         onPlayCard,
                                         onDrawCard,
                                         onPassTurn,
                                         onChooseWildColor,
                                         onCallUno,
                                         onCallOutUno,
                                     }) {

    const playerRefs = useRef({});
    const players = [
        gameState.localPlayer,
        ...gameState.opponents,
    ]
    const shouldShowWildColorModal = gameState.pendingAction === "CHOOSE_WILD_COLOR";

    return (
        <div className="uno-game-board">
            <OpponentArea
                playerRefs={playerRefs}
                registerRef={registerRef}
                opponents={gameState.opponents}
                availableActions={gameState.availableActions}/>
            <CenterArea
                players={players}
                drawPileSize={gameState.drawPileSize}
                discardPileSize={gameState.discardPileSize}
                topCard={gameState.topCard}
                currentColor={gameState.currentColor}
                lastAction={lastAction}
                availableActions={gameState.availableActions}
                onDrawCard={onDrawCard}/>
            <UnoPlayerArea
                playerRefs={playerRefs}
                registerRef={registerRef}
                localPlayer={gameState.localPlayer}
                availableActions={gameState.availableActions}
                pendingCardId={gameState.pendingCardId}
                onPassTurn={onPassTurn}
                onCallUno={onCallUno}
                onCallOutUno={onCallOutUno}
                onPlayCard={onPlayCard}
                onDrawCard={onDrawCard}/>
            <WildColorModal
                isOpen={shouldShowWildColorModal}
                onChooseWildColor={onChooseWildColor}/>

            {gameState.gameStatus === "IN_PROGRESS" &&
                <CurrentPlayerDot
                    currentPlayerId={gameState.currentPlayerId}
                    playerRefs={playerRefs}/>
            }
        </div>
    )
}