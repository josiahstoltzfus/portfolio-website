export function registerRef(refs, id, element) {
    if (element) {
        refs.current[id] = element;
    }
}

export const CARD_VALUE_TEXT = {
    ZERO: "0",
    ONE: "1",
    TWO: "2",
    THREE: "3",
    FOUR: "4",
    FIVE: "5",
    SIX: "6",
    SEVEN: "7",
    EIGHT: "8",
    NINE: "9",
    DRAW_TWO: "Draw Two",
    WILD_DRAW_FOUR: "Wild Draw Four",
    WILD: "Wild",
    SKIP: "Skip",
    REVERSE: "Reverse",
};

function capitalize(word) {
    return word.charAt(0).toUpperCase()
        + word.slice(1).toLowerCase();
}

function getPlayerName(playerId, players) {
    return players.find(player => player.id === playerId)?.name ?? "Unknown player";
}

function buildCardDetail(lastAction, players) {
    const cardValue = lastAction.playedCard.value;
    const targetName = getPlayerName(lastAction.targetPlayerId, players);

    switch (cardValue) {
        case "DRAW_TWO":
            return `${targetName} drew ${lastAction.cardsDrawn} cards.`;
        case "SKIP":
            return `${targetName} was skipped.`;
        case "REVERSE":
            return `Play direction reversed.`;
        case "WILD":
            return `Color changed to ${lastAction.resultingColor}.`;
        case "WILD_DRAW_FOUR":
            return `${targetName} drew ${lastAction.cardsDrawn} cards.`;
        default:
            return null;
    }
}

export function buildActionMessage(lastAction, players) {
    if (!lastAction) return null;

    switch (lastAction.type) {
        case "CARD_PLAYED": {
            const playerName = getPlayerName(lastAction.sourcePlayerId, players);

            const card = lastAction.playedCard;
            const cardValue = lastAction.playedCard.value;
            const valueText = CARD_VALUE_TEXT[cardValue] ?? cardValue;

            let cardText;

            if (cardValue === "WILD_DRAW_FOUR") {
                cardText = `${valueText}.`;
            } else if (cardValue === "WILD") {
                cardText = `${valueText}.`;
            } else {
                cardText = `${capitalize(card.color)} ${valueText}.`;
            }

            const message = `${playerName} played a ${cardText}`

            return {
                message,
                detail: buildCardDetail(lastAction, players),
                color: lastAction.resultingColor,
            };
        }
        case "CARD_DRAWN": {
            const playerName = getPlayerName(
                lastAction.playerId,
                players
            );

            return {
                message: `${playerName} drew a card.`,
                detail: null,
                color: null,
            };
        }
        case "UNO_CALLED_OUT": {
            const sourcePlayerName = getPlayerName(lastAction.sourcePlayerId, players);
            const targetPlayerName = getPlayerName(lastAction.targetPlayerId, players);

            return {
                message: `${sourcePlayerName} called out ${targetPlayerName}.`,
                detail: `${targetPlayerName} drew ${lastAction.cardsDrawn} cards.`,
                color: null,
            }
        }
        case "UNO_CALLED": {
            const playerName = getPlayerName(lastAction.playerId, players);

            return {
                message: `${playerName} called UNO.`,
                detail: null,
                color: null,
            }
        }
        case "TURN_PASSED": {
            const playerName = getPlayerName(lastAction.playerId, players);

            return {
                message: `${playerName} passed.`,
                detail: null,
                color: null,
            }
        }
        default:
            return null;
    }
}

const colorOrder = {
    WILD: 0,
    RED: 1,
    BLUE: 2,
    GREEN: 3,
    YELLOW: 4,
}

const valueOrder = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    SKIP: 10,
    REVERSE: 11,
    DRAW_TWO: 12,
}

export function sortCards(cards) {
    const sortedCards = [...cards]

    return sortedCards.sort((a, b) => {

        if (a.color !== b.color) {
            return colorOrder[a.color] - colorOrder[b.color];
        }

        return valueOrder[a.value] - valueOrder[b.value];
    });
}