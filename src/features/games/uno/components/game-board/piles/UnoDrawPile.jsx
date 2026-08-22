import './UnoDrawPile.css'
import UnoLogo from "../../../assets/UnoLogo.jsx";
import GameTooltip from "../../shared/GameTooltip.jsx";

export default function UnoDrawPile({onDrawCard, canDraw}) {
    return (
        <button
            type="button"
            className={`uno-draw-pile-card ${canDraw ? "uno-draw-pile-card-is-drawable" : ""}`}
            onClick={onDrawCard}>
            <div className={`uno-draw-pile-face`}>
                <UnoLogo/>
                <GameTooltip title="Draw Card" description="Click to draw a card"/>
            </div>
        </button>
    )
}